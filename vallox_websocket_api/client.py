import numpy
import websocket
from websocket import ABNF, WebSocketException

from .constants import vlxDevConstants, vlxOffsetObject


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


def to_celcius(value):
  return round(value / 100 - 273.15, 1)


class Client:
  def __init__(self, ip_address):
    self.ip_address = ip_address

  def _make_payload(self, command, dict):
    arr = [command]
    if dict is None:
      arr.append(0)
    else:
      dict = self._decode_dict(dict)
      for k, v in dict.items():
        arr.append(k)
        arr.append(v)

    arr.insert(0, len(arr) + 1)

    checksum = 0
    for a in arr:
      checksum += a

    arr.append(checksum)

    return numpy.array(arr, dtype=numpy.uint16).tobytes()

  def _decode_dict(self, dict):
    new_dict = {}
    for k, v in dict.items():
      key = int(getattr(vlxDevConstants, k, k))
      value = int(getattr(vlxDevConstants, v, v))
      new_dict[key] = value

    return new_dict

  def _websocket_request(self, command=vlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA, dict=None):
    try:
      ws = websocket.create_connection("ws://%s:80/" % self.ip_address)
      request = self._make_payload(command, dict)
      ws.send(request, opcode=ABNF.OPCODE_BINARY)
      result = ws.recv()
      ws.close()
      return numpy.fromstring(result, numpy.uint16).byteswap()
    except WebSocketException as e:
      raise IOError('Websocket requiest failed: %s' % e.message)

  def fetch_metrics(self, metric_keys=None):
    metrics = {}
    data = self._websocket_request(command=vlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES)

    if not metric_keys:
      metric_keys = vlxDevConstants.__dict__.keys()

    for key in metric_keys:
      value = data[calculate_offset(vlxDevConstants.__dict__[key])]

      if '_TEMP_' in key:
        value = to_celcius(value)

      metrics[key] = value

    return metrics

  def fetch_metric(self, metric_key):
    return self.fetch_metrics([metric_key]).get(metric_key, None)

  def set_values(self, dict):
    self._websocket_request(dict=dict)

    return True
