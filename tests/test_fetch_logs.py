import datetime
import struct
from os import path

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

        resp1 = b'\x03\x00\xf3\x00\x06\x00\xfc\x00'
        with open(path.join(path.dirname(__file__), 'log_data.bin'), 'rb') as f:
            resp2 = f.read()
        ws.recv.side_effect = [resp1, resp2]

        data = await client.fetch_raw_logs()

        ws.send.assert_called_once_with(struct.pack("HHH", 2, 243, 245))

        self.assertEqual(6, len(data))
        self.assertEqual(1308, len(data[0]))
        self.assertEqual(8192, len(data[1]))

        self.assertEqual(data[0][0], {
            'id': 0,
            'name': 'extract_air_temp',
            'date': datetime.datetime(2019, 7, 21, 10, 18),
            'value': 24.1
        })
