from unittest.mock import AsyncMock, patch

import pytest
from websockets.legacy.protocol import WebSocketCommonProtocol

from vallox_websocket_api import Client, Vallox


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
        protocol_mock = AsyncMock(spec=WebSocketCommonProtocol)
        connect.return_value.__aenter__.side_effect = protocol_mock

        yield protocol_mock.return_value
