import asyncio
from collections.abc import Callable
from functools import wraps
import logging
import re
from typing import Any, TypeVar, cast

from websockets.asyncio.client import connect as websocket_connect
from websockets.exceptions import (
    ConnectionClosed,
    InvalidHandshake,
    InvalidState,
    InvalidURI,
    PayloadTooBig,
    ProtocolError,
)

from .data.model import DataModel
from .exceptions import (
    DataModelReadException,
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

# A profile timer or stored duration of 0xFFFF (65535) means "no time limit",
# not "undefined", so fetch_metrics() keeps it as it was written instead of
# mapping it to None.
_NO_TIME_LIMIT_KEYS = frozenset(
    {
        "A_CYC_BOOST_TIMER",
        "A_CYC_FIREPLACE_TIMER",
        "A_CYC_EXTRA_TIMER",
        "A_CYC_BOOST_TIME",
        "A_CYC_FIREPLACE_TIME",
        "A_CYC_EXTRA_TIME",
    }
)

MetricValue = int | float | None
MetricDict = dict[str, MetricValue]


def to_celsius(value: int) -> float | None:
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
        TimeoutError,
    )

    @wraps(request_fn)
    async def wrapped(*args: Any, **kwargs: Any) -> Any:
        try:
            for delay in WEBSOCKET_RETRY_DELAYS.copy():
                try:
                    return await request_fn(*args, **kwargs)
                except retry_on_exceptions:
                    await asyncio.sleep(delay)
            return await request_fn(*args, **kwargs)
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
        # TimeoutError subclasses OSError, so it must be handled first.
        except TimeoutError as ex:
            raise ValloxWebsocketException("Websocket connection timed out") from ex
        except OSError as ex:
            raise ValloxWebsocketException("Websocket connection failed") from ex

    return cast(FuncT, wrapped)


class Client:
    """Client for Vallox Websocket API"""

    SETTABLE_INT_VALS = {
        re.compile(r"^A_CYC_MODE$"),
        re.compile(r"^A_CYC_STATE$"),
        re.compile(r"^A_CYC_(?:HOME|AWAY|BOOST|FIREPLACE|EXTRA)_AIR_TEMP_TARGET$"),
        re.compile(r"^A_CYC_(?:HOME|AWAY|BOOST)_SPEED_SETTING$"),
        re.compile(r"^A_CYC_(?:BOOST|FIREPLACE|EXTRA)_(?:TIME|TIMER|TIMER_ENABLED)$"),
        re.compile(r"^A_CYC_(?:FIREPLACE|EXTRA)_(?:EXTR|SUPP)_FAN$"),
        re.compile(r"^A_CYC_CF_(?:HOME|AWAY|BOOST)_(?:SUPPLY|EXTRACT)_BASE_AIRFLOW$"),
        re.compile(r"^A_CYC_(?:EXTR|SUPP)_FAN_BALANCE_BASE$"),
        re.compile(r"^A_CYC_FILTER_(?:CHANGED_(?:DAY|MONTH|YEAR)|CHANGE_INTERVAL)$"),
        re.compile(r"^A_CYC_FAULT_ACTIVITY(?:_\d{1,2})?$"),
        re.compile(r"^A_CYC_BYPASS_LOCKED$"),
        re.compile(r"^A_CYC_.*_SETPOINT$"),
        re.compile(r"^A_CYC_(?:HOME|AWAY|BOOST)_RH_CTRL_ENABLED$"),
        re.compile(r"^A_CYC_(?:HOME|AWAY|BOOST)_CO2_CTRL_ENABLED$"),
        re.compile(r"^A_CYC_CO2_THRESHOLD$"),
        re.compile(r"^A_CYC_RH_LEVEL_MODE$"),
        re.compile(r"^A_CYC_RH_BASIC_LEVEL$"),
        re.compile(r"^A_CYC_PARTIAL_BYPASS$"),
        re.compile(r"^A_CYC_SUPPLY_HEATING_ADJUST_MODE$"),
        re.compile(r"^A_CYC_POST_HEATER_WINTER_SETPOINT$"),
        re.compile(r"^A_CYC_COOLRECOVERY_DISABLED$"),
        re.compile(r"^A_CYC_DEFROST_MODE$"),
        re.compile(r"^A_CYC_SUPPLY_AIR_DEFROST_TEMP$"),
    }

    _settable_addresses: dict[int, type]

    def __init__(self, ip_address: str):
        self.ip_address = ip_address
        self.data_model = DataModel()
        self.messages = Messages(self.data_model)

        self._settable_addresses = {}

    async def load_data_model(self) -> None:
        """Load data model from unit or local file."""
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
        """Load data model from unit."""
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

    async def load_bundled_data_model(self, version: str) -> bool:
        """Load bundled data model."""
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
            if any(r.fullmatch(k) for r in self.SETTABLE_INT_VALS)
        }

    def get_settable_addresses(self) -> dict[int, type]:
        """Get settable addresses."""
        return self._settable_addresses

    def set_settable_address(self, address: int | str, var_type: type) -> None:
        """Set settable address."""
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

    def is_temperature(self, key: str) -> bool:
        """Check if key is related to a temperature."""
        if key.startswith("A_CYC_TEMP_"):
            return True
        if key.endswith("TEMP_TARGET"):
            return True
        if key.endswith("DEFROST_TEMP"):
            return True
        if key.endswith("SETPOINT"):
            return True
        if key.endswith("SUPPLY_LOWER_LIMIT"):
            return True
        return False

    def _encode_pair(
        self, key: str, value: int | float | str
    ) -> tuple[int, int | float]:
        if key not in self.data_model.addresses:
            raise ValloxInvalidInputException(f"Unknown address {key}")

        address = int(self.data_model.addresses[key])
        addresses = self.get_settable_addresses()
        if address not in addresses:
            raise ValueError(f"{key} setting is not settable")

        if self.is_temperature(key):
            value = to_kelvin(float(value))
        raw_value: int | float
        try:
            raw_value = int(value)
        except ValueError:
            raw_value = float(value)

        required_type = addresses[address]

        if not isinstance(raw_value, required_type):
            raise ValueError(
                f"{key}({address}) key needs to be an {required_type.__name__}, "
                f"but {type(raw_value).__name__} passed"
            )

        return address, raw_value

    async def _websocket_request(self, payload: bytes) -> bytes | str:
        return (await self._websocket_request_multiple(payload, 1))[0]

    @_websocket_retry_wrapper
    async def _websocket_request_multiple(
        self, payload: bytes, read_packets: int
    ) -> list[bytes | str]:
        async with websocket_connect(
            f"ws://{self.ip_address}/",
            open_timeout=WEBSOCKETS_OPEN_TIMEOUT,
            proxy=None,  # Keep local device connections off system proxies.
            logger=logger,
        ) as ws:
            await ws.send(payload)

            async def _get_responses() -> list[bytes | str]:
                return [await ws.recv() for _ in range(read_packets)]

            return await asyncio.wait_for(
                _get_responses(), timeout=WEBSOCKETS_RECV_TIMEOUT * read_packets
            )

    async def fetch_metrics(self, metric_keys: list[str] | None = None) -> MetricDict:
        """Fetch metrics."""
        await self.load_data_model()

        metrics = {}
        payload = self.messages.read_table_request.build({})
        result = await self._websocket_request(payload)

        data = self.messages.read_table_response.parse(result)

        if metric_keys is None:
            metric_keys = list(self.data_model.addresses.keys())

        for key in metric_keys:
            offset = self.data_model.calculate_offset(self.data_model.addresses[key])

            if offset is None:
                continue

            try:
                value = data[offset]
            except IndexError:
                logger.warning(f"Offset {offset} for key {key} is out of range")
                continue

            if self.is_temperature(key):
                value = to_celsius(value)
            elif value == 0xFFFF and key not in _NO_TIME_LIMIT_KEYS:
                value = None

            metrics[key] = value

        return metrics

    async def fetch_raw_logs(self) -> list[list[dict[str, int | float]]]:
        """Fetch raw logs."""
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

    async def set_values(self, dict_: dict[str, int | float | str]) -> None:
        """Set values."""
        await self.load_data_model()

        items = []
        for key, value in dict_.items():
            try:
                if value is None:
                    raise ValueError("Value cannot be None")
                address, raw_value = self._encode_pair(key, value)
                items.append({"address": address, "value": raw_value})
            except ValueError as ex:
                raise ValloxInvalidInputException(f"Unable to encode {key}") from ex

        items.sort(key=lambda x: x["address"])
        payload = self.messages.write_request.build(
            {"fields": {"value": {"items": items}}}
        )
        await self._websocket_request(payload)
