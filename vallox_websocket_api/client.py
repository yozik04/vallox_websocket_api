import numpy
import websocket
import re

from websocket import ABNF, WebSocketException

from .constants import vlxDevConstants, vlxOffsetObject

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


def to_celcius(value):
  return round(value / 100.0 - 273.15, 1)


def to_kelvin(value):
  return int(value) * 100 + 27315


class VlxWriteItem:
  def __init__(self):
    self.type = 0 # 0 = normal item , 1=week clock item
    self.address = 0
    self.value = 0
    self.extraParameter = 0

class VlxDataBuffer:
  #data = None  # type: List[VlxWriteItem]

  def __init__(self):
    self.data = []

  def appendData(self, item):
    assert isinstance(item, VlxWriteItem)
    self.data.append(item)

  def convert_data_to_buffer(self, aRequestType=None):
    if aRequestType is None:
      aRequestType = vlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA

    mandatoryParamCount = 3 # len, command, chksum
    commandWords = 3
    if aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA:
      commandWords = 2
    elif aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES:
      commandWords = 1
    elif aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA:
      commandWords = 1
    elif aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW:
      commandWords = 0

    bufferLength = len(self.data) * commandWords + mandatoryParamCount
    if aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED:
      bufferLength -= 1

    buffer = numpy.zeros(bufferLength, dtype=numpy.uint16)

    index = 0
    buffer[index] = bufferLength - 1
    index += 1

    if aRequestType != vlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED:
      buffer[index] = aRequestType
      index += 1

    for i in range(0, len(self.data)):
      #  write only read command / empty values in case of read table
      if aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_READ_DATA:
        buffer[index + i] = self.data[i].address
      elif aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES:
        buffer[index + i] = self.data[i].value
      elif aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA:
        buffer[index + i * 2] = self.data[i].address
        buffer[index + i * 2 + 1] = self.data[i].value
      elif aRequestType == vlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW:
        buffer[index + i * 2] = self.data[i].address
      else:
        buffer[index + i * 2] = self.data[i].address
        buffer[index + i * 2 + 1] = self.data[i].value
        if self.data[i].address == vlxDevConstants.WS_WEB_UI_COMMAND_LOG_LIMITED:
          buffer[index + i * 2 + 2] = self.data[i].extraParameter

    # calculate checksum
    checksum = 0
    for i in range(0, bufferLength - 1):
      checksum = checksum + buffer[i]
    checksum = checksum & 0xffff
    buffer[bufferLength - 1] = checksum

    return buffer.tobytes()

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
      self._settable_addresses = dict((v, int) for k, v in vlxDevConstants.__dict__.items() if any(r.match(k) for r in self.SETTABLE_INT_VALS))
    return self._settable_addresses

  def set_settable_address(self, address, var_type):
    if var_type not in [int, float]:
      raise AttributeError("Only float or int type are supported")

    self.get_settable_addresses() # populate _settable_addresses

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

  def _make_payload(self, command, dict):
    buf = VlxDataBuffer()

    if dict is None or len(dict) == 0:
      item = VlxWriteItem()
      item.address = command
      item.value = 0
      buf.appendData(item)
    else:
      dict = self._decode_dict(dict)
      for k, v in dict.items():
        item = VlxWriteItem()
        item.address = k
        item.value = v
        buf.appendData(item)

    return buf.convert_data_to_buffer(command)

  def _decode_dict(self, dict):
    new_dict = {}
    for k, v in dict.items():
      try:
        key = int(getattr(vlxDevConstants, k, k))
      except ValueError as e:
        raise AttributeError("%s setting does not exist" % k)
      try:
        value = int(v)
      except ValueError as e:
        value = float(v)
      new_dict[key] = value

      addresses = self.get_settable_addresses()
      try:
        required_type = addresses[key]
      except KeyError as e:
        raise AttributeError("%s setting is not settable" % k)
      assert type(value) == required_type, "%s(%d) key needs to be an %s, but %s passed" % (k, key, required_type.__name__, type(value).__name__)

    return new_dict

  def _websocket_request(self, command=vlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA, dict=None, read_packets=1):
    try:
      ws = websocket.create_connection("ws://%s:80/" % self.ip_address)
      request = self._make_payload(command, dict)
      ws.send(request, opcode=ABNF.OPCODE_BINARY)
      results = []
      for i in range(0, read_packets):
        results.append(ws.recv())
      ws.close()
      return results[0] if read_packets == 1 else results
    except WebSocketException as e:
      raise IOError('Websocket requiest failed: %s' % e.message)

  def fetch_metrics(self, metric_keys=None):
    metrics = {}
    result = self._websocket_request(command=vlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES)

    data = numpy.frombuffer(result, numpy.uint16).byteswap()

    if not metric_keys:
      metric_keys = vlxDevConstants.__dict__.keys()

    for key in metric_keys:
      value = data[calculate_offset(vlxDevConstants.__dict__[key])]

      if '_TEMP_' in key:
        value = to_celcius(value)

      metrics[key] = value

    return metrics

  def _read_raw_log_octet(self, cell):
    if cell[0] == 0xff:
      return None

    return dict(
      variableId=cell[0],
      mm=cell[1],
      hh=cell[2],
      d=cell[3],
      m=cell[4],
      y=cell[5],
      value=((cell[7] << 8) | (cell[6])) & 0xffff
    )

  def fetch_raw_logs(self):
    result = self._websocket_request(command=vlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW, read_packets=2)
    tmp = numpy.frombuffer(result[0], numpy.uint16)
    data = numpy.frombuffer(result[1], numpy.uint8)

    totalPacketSize = tmp[2] * KPageSize

    series = []
    serie_nr = 0
    for start in range(0, totalPacketSize, KPageSize):
      points = []
      for p in range(start, start + KPageSize, 8):
        cell = self._read_raw_log_octet(data[p:p+8])

        if cell:
          if cell["variableId"] <= 3: # first 4 are temperatures
            cell["value"] = to_celcius(cell["value"])
          points.append(cell)

      serie_nr += 1

      series.append(points)

    return series

  def fetch_metric(self, metric_key):
    return self.fetch_metrics([metric_key]).get(metric_key, None)

  def set_values(self, dict):
    new_dict = {}
    for key, value in dict.items():
      if '_TEMP_' in key:
        value = to_kelvin(value)
      new_dict[key] = value

    self._websocket_request(dict=new_dict)

    return True
