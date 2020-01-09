import datetime
import re

import websockets

from .constants import vlxDevConstants, vlxOffsetObject
from .exceptions import ValloxWebsocketException
from .messages import LogReadRequest, WriteMessageRequest, ReadTableRequest, ReadTableResponse, LogReadResponse1, \
    LogReadResponse2

KPageSize = 65536


def calculate_offset(aIndex):
    offset = 0

    if ((aIndex > vlxDevConstants.RANGE_START_g_cyclone_general_info) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_general_info)):
        offset = aIndex + 1
    elif ((aIndex > vlxDevConstants.RANGE_START_g_typhoon_general_info) and (
        aIndex <= vlxDevConstants.RANGE_END_g_typhoon_general_info)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_typhoon_general_info + vlxOffsetObject.CYC_NUM_OF_GENERAL_INFO
    elif ((aIndex > vlxDevConstants.RANGE_START_g_cyclone_hw_state) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_hw_state)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_hw_state + vlxOffsetObject.CYC_NUM_OF_GENERAL_TYP_INFO
    elif ((aIndex > vlxDevConstants.RANGE_START_g_cyclone_sw_state) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_sw_state)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_sw_state + vlxOffsetObject.CYC_NUM_OF_HW_STATES
    elif (
        (aIndex > vlxDevConstants.RANGE_START_g_cyclone_time) and (aIndex <= vlxDevConstants.RANGE_END_g_cyclone_time)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_time + vlxOffsetObject.CYC_NUM_OF_SW_STATES
    elif (
        (aIndex > vlxDevConstants.RANGE_START_g_cyclone_output) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_output)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_output + vlxOffsetObject.CYC_NUM_OF_TIME_ELEMENTS
    elif ((aIndex > vlxDevConstants.RANGE_START_g_cyclone_input) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_input)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_input + vlxOffsetObject.CYC_NUM_OF_OUTPUTS
    elif (
        (aIndex > vlxDevConstants.RANGE_START_g_cyclone_config) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_config)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_config + vlxOffsetObject.CYC_NUM_OF_INPUTS
    elif ((aIndex > vlxDevConstants.RANGE_START_g_cyclone_settings) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_settings)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_settings + vlxOffsetObject.CYC_NUM_OF_CONFIGS
    elif ((aIndex > vlxDevConstants.RANGE_START_g_typhoon_settings) and (
        aIndex <= vlxDevConstants.RANGE_END_g_typhoon_settings)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_typhoon_settings + vlxOffsetObject.CYC_NUM_OF_CYC_SETTINGS
    elif ((aIndex > vlxDevConstants.RANGE_START_g_self_test) and (aIndex <= vlxDevConstants.RANGE_END_g_self_test)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_self_test + vlxOffsetObject.CYC_NUM_OF_TYP_SETTINGS
    elif ((aIndex > vlxDevConstants.RANGE_START_g_faults) and (aIndex <= vlxDevConstants.RANGE_END_g_faults)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_faults + vlxOffsetObject.CYC_NUM_OF_SELF_TESTS
    elif ((aIndex > vlxDevConstants.RANGE_START_g_cyclone_weekly_schedule) and (
        aIndex <= vlxDevConstants.RANGE_END_g_cyclone_weekly_schedule)):
        offset = (aIndex) - vlxDevConstants.RANGE_START_g_cyclone_weekly_schedule + vlxOffsetObject.CYC_NUM_OF_FAULTS
    return offset - 1


def to_celcius(value: int) -> float:
    return round(value / 100.0 - 273.15, 1)


def to_kelvin(value: float) -> int:
    return int(round(value * 10) * 10 + 27315)


variableId_name_map = {
    0: "extract_air_temp",
    1: "exhaust_air_temp",
    2: "outdoor_air_temp",
    3: "supply_air_temp",
    4: "co2",
    5: "humidity"
}


class Client:
    SETTABLE_INT_VALS = {
        re.compile('^A_CYC_STATE$'),
        re.compile('^A_CYC_(?:HOME|AWAY|BOOST|EXTRA)_AIR_TEMP_TARGET$'),
        re.compile('^A_CYC_(?:HOME|AWAY|BOOST)_SPEED_SETTING$'),
        re.compile('^A_CYC_(?:BOOST|FIREPLACE|EXTRA)_TIMER$'),
        re.compile('^A_CYC_(?:FIREPLACE|EXTRA)_(?:EXTR|SUPP)_FAN$')
    }

    _settable_addresses = None

    def get_settable_addresses(self):
        if not self._settable_addresses:
            self._settable_addresses = dict((v, int) for k, v in vlxDevConstants.__dict__.items() if
                                            any(r.match(k) for r in self.SETTABLE_INT_VALS))
        return self._settable_addresses

    def set_settable_address(self, address, var_type):
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

        raise AttributeError("Unable to add address '%s' to settable list" % str(address))

    def __init__(self, ip_address):
        self.ip_address = ip_address

    def _decode_pair(self, key, value):
        try:
            address = int(getattr(vlxDevConstants, key, key))
        except ValueError as e:
            raise AttributeError("%s setting does not exist" % key)
        if '_TEMP_' in key:
            value = to_kelvin(float(value))
        try:
            raw_value = int(value)
        except ValueError as e:
            raw_value = float(value)

        addresses = self.get_settable_addresses()
        try:
            required_type = addresses[address]
        except KeyError as e:
            raise AttributeError("%s setting is not settable" % key)
        assert type(raw_value) == required_type, "%s(%d) key needs to be an %s, but %s passed" % (
        key, address, required_type.__name__, type(raw_value).__name__)

        return address, raw_value

    async def _websocket_request(self, payload, read_packets=1):
        try:
            async with websockets.connect("ws://%s/" % self.ip_address) as ws:
                await ws.send(payload)
                results = []
                for i in range(0, read_packets):
                    r = await ws.recv()

                    results.append(r)
                return results[0] if read_packets == 1 else results
        except websockets.InvalidHandshake as e:
            raise ValloxWebsocketException('Websocket handshake failed') from e
        except websockets.InvalidURI as e:
            raise ValloxWebsocketException('Websocket invalid URI') from e
        except websockets.PayloadTooBig as e:
            raise ValloxWebsocketException('Websocket payload too big') from e
        except websockets.InvalidState as e:
            raise ValloxWebsocketException('Websocket invalid state') from e
        except websockets.WebSocketProtocolError as e:
            raise ValloxWebsocketException('Websocket protocol error') from e

    async def fetch_metrics(self, metric_keys=None):
        metrics = {}
        payload = ReadTableRequest.build({})
        result = await self._websocket_request(payload)

        data = ReadTableResponse.parse(result)

        if not metric_keys:
            metric_keys = vlxDevConstants.__dict__.keys()

        for key in metric_keys:
            value = data[calculate_offset(vlxDevConstants.__dict__[key])]

            if '_TEMP_' in key:
                value = to_celcius(value)

            metrics[key] = value

        return metrics

    async def fetch_raw_logs(self):
        payload = LogReadRequest.build({})
        result = await self._websocket_request(payload, read_packets=2)
        page_count = LogReadResponse1.parse(result[0]).fields.value.pages

        expected_total_len = KPageSize * page_count
        result1_len = len(result[1])

        assert expected_total_len == result1_len, "Response is not full %d/%d" % (result1_len, expected_total_len)

        pages = (result[1][i:i + KPageSize] for i in range(0, result1_len, KPageSize))

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
                    "value": cell.value
                }
                if '_temp' in name:
                    point['value'] = to_celcius(cell.value)

                points.append(point)

            series.append(points)

        return series

    async def fetch_metric(self, metric_key):
        return (await self.fetch_metrics([metric_key])).get(metric_key, None)

    async def set_values(self, dict):
        items = []
        for key, value in dict.items():
            address, raw_value = self._decode_pair(key, value)
            items.append({"address": address, "value": raw_value})

        items.sort(key=lambda x: x['address'])
        payload = WriteMessageRequest.build({"fields": {"value": {
            "items": items
        }}})
        await self._websocket_request(payload)

        return True
