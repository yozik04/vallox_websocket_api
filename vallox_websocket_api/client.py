import asyncio
from functools import wraps
import logging
import re
from typing import Any, Callable, Dict, List, Optional, Tuple, TypeVar, Union, cast

import websockets.client
from websockets.exceptions import (
    ConnectionClosed,
    InvalidHandshake,
    InvalidState,
    InvalidURI,
    PayloadTooBig,
    ProtocolError,
)

from .data.model import DataModel, DataModelReadException
from .exceptions import (
    ValloxApiException,
    ValloxInvalidInputException,
    ValloxWebsocketException,
)
from .messages import Messages

logger = logging.getLogger("vallox").getChild(__name__)

KPageSize = 65536

WEBSOCKETS_OPEN_TIMEOUT = 1
WEBSOCKETS_RECV_TIMEOUT = 1
WEBSOCKET_RETRY_DELAYS = [0.1, 0.2, 0.5, 1]

MetricValue = Union[int, float, None]
MetricDict = Dict[str, MetricValue]


def to_celsius(value: int) -> Union[float, None]:
    if value == 0:
        return None
    return round(value / 100.0 - 273.15, 1)


def to_kelvin(value: float) -> int:
    return int(round(value * 10) * 10 + 27315)


FuncT = TypeVar("FuncT", bound=Callable[..., Any])


def _websocket_retry_wrapper(request_fn: FuncT) -> FuncT:
    retry_on_exceptions = (
        InvalidHandshake,
        InvalidState,
        ProtocolError,
        ConnectionClosed,
        OSError,
        asyncio.TimeoutError,
    )

    @wraps(request_fn)
    async def wrapped(*args: Any, **kwargs: Any) -> Any:
        try:
            delays = WEBSOCKET_RETRY_DELAYS.copy()
            while len(delays) >= 0:
                try:
                    return await request_fn(*args, **kwargs)
                except Exception as ex:
                    if isinstance(ex, retry_on_exceptions) and len(delays) > 0:
                        await asyncio.sleep(delays.pop(0))
                    else:
                        raise ex
        except InvalidHandshake as ex:
            raise ValloxWebsocketException("Websocket handshake failed") from ex
        except InvalidURI as ex:
            raise ValloxWebsocketException("Websocket invalid URI") from ex
        except PayloadTooBig as ex:
            raise ValloxWebsocketException("Websocket payload too big") from ex
        except InvalidState as ex:
            raise ValloxWebsocketException("Websocket invalid state") from ex
        except ProtocolError as ex:
            raise ValloxWebsocketException("Websocket protocol error") from ex
        except ConnectionClosed as ex:
            raise ValloxWebsocketException("Websocket connection closed") from ex
        except OSError as ex:
            raise ValloxWebsocketException("Websocket connection failed") from ex
        except asyncio.TimeoutError as ex:
            raise ValloxWebsocketException("Websocket connection timed out") from ex

    return cast(FuncT, wrapped)


class Client:
    """Client for Vallox Websocket API"""

    SETTABLE_INT_VALS = {
        re.compile(r"^A_CYC_MODE$"),
        re.compile(r"^A_CYC_STATE$"),
        re.compile(r"^A_CYC_(?:HOME|AWAY|BOOST|EXTRA)_AIR_TEMP_TARGET$"),
        re.compile(r"^A_CYC_(?:HOME|AWAY|BOOST)_SPEED_SETTING$"),
        re.compile(r"^A_CYC_(?:BOOST|FIREPLACE|EXTRA)_TIMER$"),
        re.compile(r"^A_CYC_(?:FIREPLACE|EXTRA)_(?:EXTR|SUPP)_FAN$"),
        re.compile(r"^A_CYC_(?:EXTR|SUPP)_FAN_BALANCE_BASE$"),
        re.compile(
            r"^A_CYC_FILTER_CHANGED_(?:DAY|MONTH|YEAR)|A_CYC_FILTER_CHANGE_INTERVAL$"
        ),
        re.compile(r"^A_CYC_FAULT_ACTIVITY(?:_\d{1,2})?$"),
    }

    _settable_addresses: Dict[int, type]

    def __init__(self, ip_address: str):
        self.ip_address = ip_address
        self.data_model = DataModel()
        self.messages = Messages(self.data_model)

        self._settable_addresses = {}

    async def load_data_model(self) -> None:
        if self.data_model.is_valid:
            return

        # try to load from unit first
        if await self.load_data_model_from_unit():
            return

        # if failed try to load from local file
        if await self.load_bundled_data_model("2.0.16"):
            return

        raise DataModelReadException("Failed to load data model")

    async def load_data_model_from_unit(self) -> bool:
        for path in ["js/bundle.js", "js/vallox.js"]:
            url = f"http://{self.ip_address}/{path}"
            logger.info(f"Attempting to load data model from {url}")
            try:
                await self.data_model.read_model_from_unit(url)
                logger.info(f"Loaded data model from {url}")
                self._on_model_loaded()
                return True
            except DataModelReadException as ex:
                logger.warning(f"Failed to load data model from {url}: {ex}")
                return False

        return False

    async def load_bundled_data_model(self, version: str) -> bool:
        try:
            await self.data_model.read_bundled(version)
            self._on_model_loaded()
            return True
        except DataModelReadException as ex:
            logger.warning(f"Failed to load local data model {version}: {ex}")
            return False

    def _on_model_loaded(self) -> None:
        self._settable_addresses = {
            v: int
            for k, v in self.data_model.addresses.items()
            if any(r.match(k) for r in self.SETTABLE_INT_VALS)
        }

    def get_settable_addresses(self) -> Dict[int, type]:
        return self._settable_addresses

    def set_settable_address(self, address: Union[int, str], var_type: type) -> None:
        if var_type not in [int, float]:
            raise ValloxInvalidInputException("Only float or int types are supported")

        if isinstance(address, int):
            self._settable_addresses[address] = var_type
            return
        elif isinstance(address, str) and address in self.data_model.addresses:
            key = int(self.data_model.addresses[address])
            self._settable_addresses[key] = var_type
            return

        raise ValloxInvalidInputException(
            f"Unable to add address '{address}' to settable list"
        )

    def _encode_pair(
        self, key: str, value: Union[int, float, str]
    ) -> Tuple[int, Union[int, float]]:
        if key not in self.data_model.addresses:
            raise ValloxInvalidInputException(f"Unknown address {key}")

        address = int(self.data_model.addresses[key])
        addresses = self.get_settable_addresses()
        assert address in addresses, f"{key} setting is not settable"

        if "_TEMP_" in key:
            value = to_kelvin(float(value))
        raw_value: Union[int, float]
        try:
            raw_value = int(value)
        except ValueError:
            raw_value = float(value)

        required_type = addresses[address]

        assert isinstance(
            raw_value, required_type
        ), f"{key}({address}) key needs to be an {required_type.__name__}, but {type(raw_value).__name__} passed"

        return address, raw_value

    async def _websocket_request(self, payload: bytes) -> bytes:
        return (await self._websocket_request_multiple(payload, 1))[0]

    @_websocket_retry_wrapper
    async def _websocket_request_multiple(
        self, payload: bytes, read_packets: int
    ) -> List[bytes]:
        async with websockets.client.connect(
            f"ws://{self.ip_address}/",
            open_timeout=WEBSOCKETS_OPEN_TIMEOUT,
            logger=logger,
        ) as ws:
            await ws.send(payload)

            async def _get_responses() -> List[bytes]:
                return [await ws.recv() for _ in range(0, read_packets)]

            return await asyncio.wait_for(
                _get_responses(), timeout=WEBSOCKETS_RECV_TIMEOUT * read_packets
            )

    async def fetch_metrics(
        self, metric_keys: Optional[List[str]] = None
    ) -> MetricDict:
        await self.load_data_model()

        metrics = {}
        payload = self.messages.read_table_request.build({})
        result = await self._websocket_request(payload)

        data = self.messages.read_table_response.parse(result)

        if metric_keys is None:
            metric_keys = list(self.data_model.addresses.keys())

        for key in metric_keys:
            value = data[
                self.data_model.calculate_offset(self.data_model.addresses[key])
            ]

            if "_TEMP_" in key:
                value = to_celsius(value)
            elif value == 0xFFFF:
                value = None

            metrics[key] = value

        return metrics

    async def fetch_raw_logs(self) -> List[List[Dict[str, Union[int, float]]]]:
        await self.load_data_model()

        payload = self.messages.log_read_request.build({})
        result = await self._websocket_request_multiple(payload, read_packets=2)
        page_count = self.messages.log_read_response1.parse(
            result[0]
        ).fields.value.pages

        expected_total_len = KPageSize * page_count
        result1_len = len(result[1])

        if expected_total_len != result1_len:
            raise ValloxApiException(
                f"Response is not full {result1_len}/{expected_total_len}"
            )

        pages = (result[1][i : i + KPageSize] for i in range(0, result1_len, KPageSize))

        series = []
        for page in pages:
            points = []
            data = self.messages.log_read_response2.parse(page)
            for cell in data:
                name = str(cell.id)
                point = {
                    "id": int(cell.id),
                    "name": name,
                    "date": cell.date,
                    "value": cell.value,
                }
                if "_temp" in name:
                    point["value"] = to_celsius(cell.value)

                points.append(point)

            series.append(points)

        return series

    async def set_values(self, dict_: Dict[str, Union[int, float, str]]) -> None:
        await self.load_data_model()

        items = []
        for key, value in dict_.items():
            try:
                assert value is not None, "Value cannot be None"
                address, raw_value = self._encode_pair(key, value)
                items.append({"address": address, "value": raw_value})
            except (ValueError, AssertionError) as ex:
                raise ValloxInvalidInputException(f"Unable to encode {key}") from ex

        items.sort(key=lambda x: x["address"])
        payload = self.messages.write_request.build(
            {"fields": {"value": {"items": items}}}
        )
        await self._websocket_request(payload)
