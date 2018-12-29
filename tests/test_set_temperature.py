import mock
import struct
from unittest import TestCase
import binascii

from vallox_websocket_api import Client

class TestClient(TestCase):
  # [4, 249, 20508, 29215, 49976]
  def setUp(self):
    self.client = Client('127.0.0.1')

  @mock.patch('vallox_websocket_api.client.websocket.create_connection', autospec=True)
  def testSetHomeAirTempTargetRawInt(self, mock_websocket_create_connection):
    ws = mock.Mock()
    ws.recv.return_value = b''
    mock_websocket_create_connection.return_value = ws

    self.client.set_values({
      'A_CYC_HOME_AIR_TEMP_TARGET': 19
    })

    ws.send.assert_called_once_with(struct.pack('HHHHH', 4, 249, 20508, 29215, 49976), opcode=0x2)

  @mock.patch('vallox_websocket_api.client.websocket.create_connection', autospec=True)
  def testSetHomeAirTempTargetRawFloat(self, mock_websocket_create_connection):
    ws = mock.Mock()
    ws.recv.return_value = b''
    mock_websocket_create_connection.return_value = ws

    self.client.set_values({
      'A_CYC_HOME_AIR_TEMP_TARGET': 19.0
    })

    ws.send.assert_called_once_with(struct.pack('HHHHH', 4, 249, 20508, 29215, 49976), opcode=0x2)

  @mock.patch('vallox_websocket_api.client.websocket.create_connection', autospec=True)
  def testSetHomeAirTempTargetRawString(self, mock_websocket_create_connection):
    ws = mock.Mock()
    ws.recv.return_value = b''
    mock_websocket_create_connection.return_value = ws

    self.client.set_values({
      'A_CYC_HOME_AIR_TEMP_TARGET': '19'
    })

    ws.send.assert_called_once_with(struct.pack('HHHHH', 4, 249, 20508, 29215, 49976), opcode=0x2)