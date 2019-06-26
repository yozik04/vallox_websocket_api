import asynctest
import websockets
from vallox_websocket_api.client import Client

def with_client(func):
  @asynctest.patch('websockets.connect')
  async def wrapper(cls, connect):
    client = Client('127.0.0.1')
    instance = connect.return_value

    protocol_mock = asynctest.create_autospec(websockets.WebSocketCommonProtocol)
    instance.__aenter__.side_effect = protocol_mock
    await func(cls, client, protocol_mock.return_value)

  return wrapper