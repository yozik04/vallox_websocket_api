from pathlib import Path
import struct
from typing import Dict
from unittest.mock import AsyncMock, patch

import pytest
from websockets.client import WebSocketClientProtocol

from vallox_websocket_api import Client, Vallox

JS_BUNDLE_FOLDER = Path(__file__).parent / "data" / "js"
JS_BUNDLE_FILES = sorted(
    path for path in JS_BUNDLE_FOLDER.glob("*.js") if not path.name.startswith("_")
)


@pytest.fixture(params=JS_BUNDLE_FILES, ids=lambda path: path.name)
def js_bundle(request):
    return request.param


@pytest.fixture
async def client():
    client = Client("127.0.0.1")
    await client.load_bundled_data_model("2.0.16")

    return client


@pytest.fixture
async def vallox():
    vallox = Vallox("127.0.0.1")
    await vallox.load_bundled_data_model("2.0.16")

    return vallox


@pytest.fixture
def ws():
    with patch("websockets.client.connect") as connect:
        protocol_mock = AsyncMock(spec=WebSocketClientProtocol)
        connect.return_value.__aenter__.side_effect = protocol_mock

        yield protocol_mock.return_value


@pytest.fixture
def raw_table():
    """Build a raw read table response: big-endian 16-bit values, all 0 except `values`."""

    def build(client: Client, values: Dict[str, int]) -> bytes:
        offsets = {
            key: client.data_model.calculate_offset(address)
            for key, address in client.data_model.addresses.items()
        }
        table = [0] * (max(o for o in offsets.values() if o is not None) + 1)
        for key, value in values.items():
            table[offsets[key]] = value
        return struct.pack(f">{len(table)}H", *table)

    return build
