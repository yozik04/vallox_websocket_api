import struct
import mock
import asynctest
import websockets

from vallox_websocket_api import Vallox

def with_vallox(func):
  @asynctest.patch('websockets.connect')
  async def wrapper(cls, connect):
    client = Vallox('127.0.0.1')
    client.set_values = asynctest.CoroutineMock()
    instance = connect.return_value

    protocol_mock = asynctest.create_autospec(websockets.WebSocketCommonProtocol)
    instance.__aenter__.side_effect = protocol_mock
    await func(cls, client, protocol_mock.return_value)

  return wrapper

class TestValloxRawLogs(asynctest.TestCase):
  @with_vallox
  async def testFetchRawLogs(self, client, ws):
    """
    IoQueue.KItemTypeLog = 1
    VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW = 243
    checksum = 245
    Uint16Array(3) [2, 243, 245]
    :return:
    """

    ws.recv.return_value = struct.pack("HHHH", 3, 243, 0, 246)

    data = await client.fetch_raw_logs()

    ws.send.assert_called_once_with(struct.pack( "HHH", 2, 243, 245))