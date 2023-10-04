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

from .constants import vlxDevConstants, vlxOffsetObject
from .exceptions import (
    ValloxApiException,
    ValloxInvalidInputException,
    ValloxWebsocketException,
)
from .messages import (
    LogReadRequest,
    LogReadResponse1,
    LogReadResponse2,
    ReadTableRequest,
    ReadTableResponse,
    WriteMessageRequest,
)

logger = logging.getLogger("vallox").getChild(__name__)

KPageSize = 65536

WEBSOCKETS_OPEN_TIMEOUT = 1
WEBSOCKETS_RECV_TIMEOUT = 1
WEBSOCKET_RETRY_DELAYS = [0.1, 0.2, 0.5, 1]


def calculate_offset(aIndex: int) -> int:
    range_to_offset = {
        range(
            vlxDevConstants.RANGE_START_g_cyclone_general_info,
            vlxDevConstants.RANGE_END_g_cyclone_general_info + 1,
        ): 1,
        range(
            vlxDevConstants.RANGE_START_g_typhoon_general_info,
            vlxDevConstants.RANGE_END_g_typhoon_general_info + 1,
        ): vlxOffsetObject.CYC_NUM_OF_GENERAL_INFO,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_hw_state,
            vlxDevConstants.RANGE_END_g_cyclone_hw_state + 1,
        ): vlxOffsetObject.CYC_NUM_OF_GENERAL_TYP_INFO,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_sw_state,
            vlxDevConstants.RANGE_END_g_cyclone_sw_state + 1,
        ): vlxOffsetObject.CYC_NUM_OF_HW_STATES,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_time,
            vlxDevConstants.RANGE_END_g_cyclone_time + 1,
        ): vlxOffsetObject.CYC_NUM_OF_SW_STATES,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_output,
            vlxDevConstants.RANGE_END_g_cyclone_output + 1,
        ): vlxOffsetObject.CYC_NUM_OF_TIME_ELEMENTS,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_input,
            vlxDevConstants.RANGE_END_g_cyclone_input + 1,
        ): vlxOffsetObject.CYC_NUM_OF_OUTPUTS,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_config,
            vlxDevConstants.RANGE_END_g_cyclone_config + 1,
        ): vlxOffsetObject.CYC_NUM_OF_INPUTS,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_settings,
            vlxDevConstants.RANGE_END_g_cyclone_settings + 1,
        ): vlxOffsetObject.CYC_NUM_OF_CONFIGS,
        range(
            vlxDevConstants.RANGE_START_g_typhoon_settings,
            vlxDevConstants.RANGE_END_g_typhoon_settings + 1,
        ): vlxOffsetObject.CYC_NUM_OF_CYC_SETTINGS,
        range(
            vlxDevConstants.RANGE_START_g_self_test,
            vlxDevConstants.RANGE_END_g_self_test + 1,
        ): vlxOffsetObject.CYC_NUM_OF_TYP_SETTINGS,
        range(
            vlxDevConstants.RANGE_START_g_faults, vlxDevConstants.RANGE_END_g_faults + 1
        ): vlxOffsetObject.CYC_NUM_OF_SELF_TESTS,
        range(
            vlxDevConstants.RANGE_START_g_cyclone_weekly_schedule,
            vlxDevConstants.RANGE_END_g_cyclone_weekly_schedule + 1,
        ): vlxOffsetObject.CYC_NUM_OF_FAULTS,
    }
    if (
        hasattr(vlxDevConstants, "RANGE_START_g_cyclone_extended")
        and hasattr(vlxDevConstants, "RANGE_END_g_cyclone_extended")
        and hasattr(vlxOffsetObject, "CYC_NUM_OF_SCHEDULED_EVENTS")
    ):
        range_to_offset[
            range(
                vlxDevConstants.RANGE_START_g_cyclone_extended,
                vlxDevConstants.RANGE_END_g_cyclone_extended + 1,
            )
        ] = vlxOffsetObject.CYC_NUM_OF_SCHEDULED_EVENTS

    for r, offset in range_to_offset.items():
        if aIndex in r:
            return aIndex - r.start + offset - 1

    return 0


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
    SETTABLE_INT_VALS = {
        re.compile("^A_CYC_MODE$"),
        re.compile("^A_CYC_STATE$"),
        re.compile("^A_CYC_(?:HOME|AWAY|BOOST|EXTRA)_AIR_TEMP_TARGET$"),
        re.compile("^A_CYC_(?:HOME|AWAY|BOOST)_SPEED_SETTING$"),
        re.compile("^A_CYC_(?:BOOST|FIREPLACE|EXTRA)_TIMER$"),
        re.compile("^A_CYC_(?:FIREPLACE|EXTRA)_(?:EXTR|SUPP)_FAN$"),
        re.compile("^A_CYC_(?:EXTR|SUPP)_FAN_BALANCE_BASE$"),
    }

    _settable_addresses: Dict[int, type]

    def __init__(self, ip_address: str):
        self.ip_address = ip_address

        self._settable_addresses = {
            v: int
            for k, v in vlxDevConstants.__dict__.items()
            if any(r.match(k) for r in self.SETTABLE_INT_VALS)
        }

    def get_settable_addresses(self) -> Dict[int, type]:
        return self._settable_addresses

    def set_settable_address(self, address: Union[int, str], var_type: type) -> None:
        if var_type not in [int, float]:
            raise ValloxInvalidInputException("Only float or int types are supported")

        if type(address) == int:
            self._settable_addresses[address] = var_type
            return
        elif type(address) == str:
            if hasattr(vlxDevConstants, address):
                key = int(getattr(vlxDevConstants, address, address))
                self._settable_addresses[key] = var_type
                return

        raise ValloxInvalidInputException(
            f"Unable to add address '{address}' to settable list"
        )

    def _encode_pair(
        self, key: str, value: Union[int, float, str]
    ) -> Tuple[int, Union[int, float]]:
        address = int(getattr(vlxDevConstants, key, key))
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

        assert (
            type(raw_value) == required_type
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
        metrics = {}
        payload = ReadTableRequest.build({})
        result = await self._websocket_request(payload)

        data = ReadTableResponse.parse(result)

        if metric_keys is None:
            metric_keys = vlxDevConstants.__dict__.keys()

        for key in metric_keys:
            value = data[calculate_offset(vlxDevConstants.__dict__[key])]

            if "_TEMP_" in key:
                value = to_celsius(value)
            elif value == 0xFFFF:
                value = None

            metrics[key] = value

        return metrics

    async def fetch_raw_logs(self) -> List[List[Dict[str, Union[int, float]]]]:
        payload = LogReadRequest.build({})
        result = await self._websocket_request_multiple(payload, read_packets=2)
        page_count = LogReadResponse1.parse(result[0]).fields.value.pages

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
            data = LogReadResponse2.parse(page)
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

    async def fetch_metric(self, metric_key: str) -> MetricValue:
        return (await self.fetch_metrics([metric_key])).get(metric_key, None)

    async def set_values(self, dict_: Dict[str, Union[int, float, str]]) -> bool:
        items = []
        for key, value in dict_.items():
            try:
                assert value is not None, "Value cannot be None"
                address, raw_value = self._encode_pair(key, value)
                items.append({"address": address, "value": raw_value})
            except (ValueError, AssertionError) as ex:
                raise ValloxInvalidInputException(f"Unable to encode {key}") from ex

        items.sort(key=lambda x: x["address"])
        payload = WriteMessageRequest.build({"fields": {"value": {"items": items}}})
        await self._websocket_request(payload)

        return True
