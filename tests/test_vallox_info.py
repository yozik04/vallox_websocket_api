from unittest import mock

import pytest

from vallox_websocket_api import Vallox


@pytest.fixture
def vallox():
    client = Vallox("127.0.0.1")
    client.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_APPL_SW_VERSION_1": 0,
            "A_CYC_APPL_SW_VERSION_2": 0,
            "A_CYC_APPL_SW_VERSION_3": 0,
            "A_CYC_APPL_SW_VERSION_4": 0,
            "A_CYC_APPL_SW_VERSION_5": 0,
            "A_CYC_APPL_SW_VERSION_6": 0,
            "A_CYC_APPL_SW_VERSION_7": 512,
            "A_CYC_APPL_SW_VERSION_8": 0,
            "A_CYC_APPL_SW_VERSION_9": 512,
            "A_CYC_MACHINE_MODEL": 3,
            "A_CYC_UUID0": 25432,
            "A_CYC_UUID1": 3772,
            "A_CYC_UUID2": 25432,
            "A_CYC_UUID3": 0,
            "A_CYC_UUID4": 25432,
            "A_CYC_UUID5": 25432,
            "A_CYC_UUID6": 25432,
            "A_CYC_UUID7": 25432,
        }
    )

    return client


async def test_get_info(vallox: Vallox):
    info = await vallox.get_info()

    assert info["model"] == "Vallox 145 MV"
    assert info["sw_version"] == "2.0.2"
    assert str(info["uuid"]) == "63580ebc-6358-0000-6358-635863586358"

    vallox.fetch_metrics.assert_called()
