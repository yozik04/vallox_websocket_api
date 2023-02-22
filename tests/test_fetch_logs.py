import datetime
from os import path
import struct

from vallox_websocket_api import Vallox


async def test_fetch_raw_logs(vallox: Vallox, ws):
    """
    IoQueue.KItemTypeLog = 1
    VlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW = 243
    checksum = 245
    Uint16Array(3) [2, 243, 245]
    :return:
    """

    resp1 = b"\x03\x00\xf3\x00\x06\x00\xfc\x00"
    with open(path.join(path.dirname(__file__), "log_data.bin"), "rb") as f:
        resp2 = f.read()
    ws.recv.side_effect = [resp1, resp2]

    data = await vallox.fetch_raw_logs()

    ws.send.assert_called_once_with(struct.pack("HHH", 2, 243, 245))

    assert len(data) == 6
    assert len(data[0]) == 1308
    assert len(data[1]) == 8192

    assert data[0][0] == {
        "id": 0,
        "name": "extract_air_temp",
        "date": datetime.datetime(2019, 7, 21, 10, 18),
        "value": 24.1,
    }
