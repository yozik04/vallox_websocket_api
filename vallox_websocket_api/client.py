import asyncio
import re
from functools import wraps
from typing import Dict, Union, Tuple, List, Optional, Any, TypeVar, Callable, cast

import websockets

from .constants import vlxDevConstants, vlxOffsetObject
from .exceptions import ValloxWebsocketException
from .messages import (LogReadRequest, LogReadResponse1, LogReadResponse2,
                       ReadTableRequest, ReadTableResponse,
                       WriteMessageRequest)

KPageSize = 65536


def calculate_offset(aIndex: int) -> int:
    offset = 0

    if (aIndex > vlxDevConstants.RANGE_START_g_cyclone_general_info) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_general_info
    ):
        offset = aIndex + 1
    elif (aIndex > vlxDevConstants.RANGE_START_g_typhoon_general_info) and (
        aIndex <= vlxDevConstants.RANGE_END_g_typhoon_general_info
    ):
        offset = (
            aIndex
            - vlxDevConstants.RANGE_START_g_typhoon_general_info
            + vlxOffsetObject.CYC_NUM_OF_GENERAL_INFO
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_hw_state) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_hw_state
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_hw_state
            + vlxOffsetObject.CYC_NUM_OF_GENERAL_TYP_INFO
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_sw_state) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_sw_state
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_sw_state
            + vlxOffsetObject.CYC_NUM_OF_HW_STATES
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_time) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_time
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_time
            + vlxOffsetObject.CYC_NUM_OF_SW_STATES
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_output) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_output
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_output
            + vlxOffsetObject.CYC_NUM_OF_TIME_ELEMENTS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_input) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_input
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_input
            + vlxOffsetObject.CYC_NUM_OF_OUTPUTS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_config) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_config
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_config
            + vlxOffsetObject.CYC_NUM_OF_INPUTS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_settings) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_settings
    ):
        offset = (
            (aIndex)  # noqa
            - vlxDevConstants.RANGE_START_g_cyclone_settings
            + vlxOffsetObject.CYC_NUM_OF_CONFIGS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_typhoon_settings) and (
        aIndex <= vlxDevConstants.RANGE_END_g_typhoon_settings
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_typhoon_settings
            + vlxOffsetObject.CYC_NUM_OF_CYC_SETTINGS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_self_test) and (
        aIndex <= vlxDevConstants.RANGE_END_g_self_test
    ):
        offset = (
            (aIndex)  # noqa
            - vlxDevConstants.RANGE_START_g_self_test
            + vlxOffsetObject.CYC_NUM_OF_TYP_SETTINGS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_faults) and (
        aIndex <= vlxDevConstants.RANGE_END_g_faults
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_faults
            + vlxOffsetObject.CYC_NUM_OF_SELF_TESTS
        )
    elif (aIndex > vlxDevConstants.RANGE_START_g_cyclone_weekly_schedule) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_weekly_schedule
    ):
        offset = (
            (aIndex)
            - vlxDevConstants.RANGE_START_g_cyclone_weekly_schedule
            + vlxOffsetObject.CYC_NUM_OF_FAULTS
        )
    return offset - 1


def to_celsius(value: int) -> float:
    return round(value / 100.0 - 273.15, 1)


def to_kelvin(value: float) -> int:
    return int(round(value * 10) * 10 + 27315)


FuncT = TypeVar("FuncT", bound=Callable[..., Any])


def _websocket_exception_handler(request_fn: FuncT) -> FuncT:
    @wraps(request_fn)
    async def wrapped(*args: Any, **kwargs: Any) -> Any:
        try:
            return await request_fn(*args, **kwargs)
        except websockets.InvalidHandshake as e:
            raise ValloxWebsocketException("Websocket handshake failed") from e
        except websockets.InvalidURI as e:
            raise ValloxWebsocketException("Websocket invalid URI") from e
        except websockets.PayloadTooBig as e:
            raise ValloxWebsocketException("Websocket payload too big") from e
        except websockets.InvalidState as e:
            raise ValloxWebsocketException("Websocket invalid state") from e
        except websockets.WebSocketProtocolError as e:
            raise ValloxWebsocketException("Websocket protocol error") from e

    return cast(FuncT, wrapped)


class Client:
    SETTABLE_INT_VALS = {
        re.compile("^A_CYC_STATE$"),
        re.compile("^A_CYC_(?:HOME|AWAY|BOOST|EXTRA)_AIR_TEMP_TARGET$"),
        re.compile("^A_CYC_(?:HOME|AWAY|BOOST)_SPEED_SETTING$"),
        re.compile("^A_CYC_(?:BOOST|FIREPLACE|EXTRA)_TIMER$"),
        re.compile("^A_CYC_(?:FIREPLACE|EXTRA)_(?:EXTR|SUPP)_FAN$"),
        re.compile("^A_CYC_(?:EXTR|SUPP)_FAN_BALANCE_BASE$"),
    }

    _settable_addresses: Dict[int, type]

    def get_settable_addresses(self) -> Dict[int, type]:
        return self._settable_addresses

    def set_settable_address(self, address: Union[int, str], var_type: type) -> None:
        if var_type not in [int, float]:
            raise AttributeError("Only float or int type are supported")

        self.get_settable_addresses()  # populate _settable_addresses

        if type(address) == int:
            self._settable_addresses[address] = var_type
            return
        elif type(address) == str:
            if hasattr(vlxDevConstants, address):
                key = int(getattr(vlxDevConstants, address, address))
                self._settable_addresses[key] = var_type
                return

        raise AttributeError(
            "Unable to add address '%s' to settable list" % str(address)
        )

    def __init__(self, ip_address: str):
        self.ip_address = ip_address

        self._settable_addresses = dict(
            (v, int)
            for k, v in vlxDevConstants.__dict__.items()
            if any(r.match(k) for r in self.SETTABLE_INT_VALS)
        )

    def _decode_pair(self, key: str, value: Union[int,str]) -> Tuple[int, Union[int, float]]:
        try:
            address = int(getattr(vlxDevConstants, key, key))
        except ValueError:
            raise AttributeError("%s setting does not exist" % key)
        if "_TEMP_" in key:
            value = to_kelvin(float(value))
        raw_value: Union[int, float]
        try:
            raw_value = int(value)
        except ValueError:
            raw_value = float(value)

        addresses = self.get_settable_addresses()
        try:
            required_type = addresses[address]
        except KeyError:
            raise AttributeError("%s setting is not settable" % key)

        assert type(raw_value) == required_type, (
            "%s(%d) key needs to be an %s, but %s passed"
            % (key, address, required_type.__name__, type(raw_value).__name__)
        )

        return address, raw_value

    @_websocket_exception_handler
    async def _websocket_request(self, payload: bytes) -> bytes:
        async with websockets.connect("ws://%s/" % self.ip_address) as ws:
            await ws.send(payload)
            r: bytes = await ws.recv()
            return r

    @_websocket_exception_handler
    async def _websocket_request_multiple(self, payload: bytes, read_packets: int) -> List[bytes]:
        async with websockets.connect("ws://%s/" % self.ip_address) as ws:
            await ws.send(payload)
            return await asyncio.gather(*[ws.recv() for _ in range(0, read_packets)])

    async def fetch_metrics(self, metric_keys: Optional[List[str]] = None) -> Dict[str, Union[int, float]]:
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

            metrics[key] = value

        return metrics

    async def fetch_raw_logs(self) -> List[List[Dict[str, Union[int, float]]]]:
        payload = LogReadRequest.build({})
        result = await self._websocket_request_multiple(payload, read_packets=2)
        page_count = LogReadResponse1.parse(result[0]).fields.value.pages

        expected_total_len = KPageSize * page_count
        result1_len = len(result[1])

        assert expected_total_len == result1_len, "Response is not full %d/%d" % (
            result1_len,
            expected_total_len,
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

    async def fetch_metric(self, metric_key: str) -> Optional[Union[int, float]]:
        return (await self.fetch_metrics([metric_key])).get(metric_key, None)

    async def set_values(self, dict_: Dict[str, Union[int,str]]) -> bool:
        items = []
        for key, value in dict_.items():
            address, raw_value = self._decode_pair(key, value)
            items.append({"address": address, "value": raw_value})

        items.sort(key=lambda x: x["address"])
        payload = WriteMessageRequest.build({"fields": {"value": {"items": items}}})
        await self._websocket_request(payload)

        return True
