from unittest import mock

import pytest

from vallox_websocket_api import Profile, Vallox, ValloxInvalidInputException


@pytest.fixture
def vallox():
    client = Vallox("127.0.0.1")
    client.set_values = mock.AsyncMock()
    client.fetch_metrics = mock.AsyncMock()
    return client


async def test_set_fan_speed_home(vallox: Vallox):
    await vallox.set_fan_speed(Profile.HOME, 19)

    vallox.set_values.assert_called_once_with({"A_CYC_HOME_SPEED_SETTING": 19})


async def test_set_fan_speed_away(vallox: Vallox):
    await vallox.set_fan_speed(Profile.AWAY, 0)

    vallox.set_values.assert_called_once_with({"A_CYC_AWAY_SPEED_SETTING": 0})


async def test_set_fan_speed_boost(vallox: Vallox):
    await vallox.set_fan_speed(Profile.BOOST, 100)

    vallox.set_values.assert_called_once_with({"A_CYC_BOOST_SPEED_SETTING": 100})


async def test_set_fan_speed_wrong(vallox: Vallox):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_fan_speed(Profile.FIREPLACE, 19)


async def test_set_fan_speed_home_invalid_percentage(vallox: Vallox):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_fan_speed(Profile.HOME, -1)


async def test_set_fan_speed_home_invalid_percentage2(vallox: Vallox):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_fan_speed(Profile.HOME, 101)


async def test_get_fan_speed_for_profile_home(vallox: Vallox):
    vallox.fetch_metrics.return_value = {"A_CYC_HOME_SPEED_SETTING": 19}

    data = await vallox.fetch_metric_data()
    assert data.get_fan_speed(Profile.HOME) == 19
    vallox.fetch_metrics.assert_called_once()
