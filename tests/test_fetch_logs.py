import struct
import mock
from unittest import TestCase

from vallox_websocket_api import Vallox


class TestValloxRawLogs(TestCase):
  def setUp(self):
    self.client = Vallox('127.0.0.1')

    self.client.set_values = mock.MagicMock()

  @mock.patch('vallox_websocket_api.client.websocket.create_connection', autospec=True)
  def testFetchRawLogs(self, mock_websocket_create_connection):
    """
    IoQueue.KItemTypeLog = 1
    VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW = 243
    checksum = 245
    Uint16Array(3) [2, 243, 245]
    :return:
    """
    client = Vallox('127.0.0.1')

    ws = mock.Mock()
    ws.recv.return_value = struct.pack("HHHH", 3, 243, 0, 246)
    mock_websocket_create_connection.return_value = ws

    data = client.fetch_raw_logs()

    ws.send.assert_called_once_with(struct.pack( "HHH", 2, 243, 245), opcode=0x2)