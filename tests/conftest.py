from unittest.mock import AsyncMock, patch

import pytest
import websockets

from vallox_websocket_api.client import Client
from vallox_websocket_api.vallox import Vallox


@pytest.fixture
def client():
    return Client("127.0.0.1")


@pytest.fixture
def vallox():
    return Vallox("127.0.0.1")


@pytest.fixture
def ws():
    with patch("websockets.client.connect") as connect:
        protocol_mock = AsyncMock(spec=websockets.WebSocketCommonProtocol)
        connect.return_value.__aenter__.side_effect = protocol_mock

        yield protocol_mock.return_value
