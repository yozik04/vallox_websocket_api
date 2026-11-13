from unittest import mock

import pytest

from vallox_websocket_api import (
    MetricData,
    Profile,
    Vallox,
    ValloxInvalidInputException,
)

TIMED_PROFILES = [
    (Profile.BOOST, "A_CYC_BOOST_TIME", "A_CYC_BOOST_TIMER_ENABLED"),
    (Profile.FIREPLACE, "A_CYC_FIREPLACE_TIME", "A_CYC_FIREPLACE_TIMER_ENABLED"),
    (Profile.EXTRA, "A_CYC_EXTRA_TIME", "A_CYC_EXTRA_TIMER_ENABLED"),
]

PROFILES_WITHOUT_TIMER = [Profile.HOME, Profile.AWAY, Profile.AUTO, Profile.NONE]


@pytest.fixture
def vallox():
    client = Vallox("127.0.0.1")
    client.set_values = mock.AsyncMock()
    return client


@pytest.mark.parametrize("profile, duration, switch", TIMED_PROFILES)
def test_get_timer_duration(profile, duration, switch):
    data = MetricData({duration: 45, switch: 0})

    assert data.get_timer_duration(profile) == 45


@pytest.mark.parametrize("profile, duration, switch", TIMED_PROFILES)
def test_get_timer_duration_missing(profile, duration, switch):
    data = MetricData({duration: None, switch: 1})

    assert data.get_timer_duration(profile) is None


@pytest.mark.parametrize("profile", PROFILES_WITHOUT_TIMER)
def test_get_timer_duration_for_profile_without_timer(profile):
    data = MetricData({duration: 45 for _, duration, _ in TIMED_PROFILES})

    assert data.get_timer_duration(profile) is None


@pytest.mark.parametrize("profile, duration, switch", TIMED_PROFILES)
@pytest.mark.parametrize("enabled, written", [(True, 1), (False, 0)])
async def test_set_timer_enabled(
    vallox: Vallox, profile, duration, switch, enabled, written
):
    await vallox.set_timer_enabled(profile, enabled)

    vallox.set_values.assert_called_once_with({switch: written})


@pytest.mark.parametrize("profile", PROFILES_WITHOUT_TIMER)
async def test_set_timer_enabled_for_profile_without_timer(vallox: Vallox, profile):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_timer_enabled(profile, True)

    vallox.set_values.assert_not_called()


@pytest.mark.parametrize("profile, duration, switch", TIMED_PROFILES)
@pytest.mark.parametrize("minutes", [1, 45, 65535])
async def test_set_timer_duration(vallox: Vallox, profile, duration, switch, minutes):
    await vallox.set_timer_duration(profile, minutes)

    vallox.set_values.assert_called_once_with({duration: minutes})


@pytest.mark.parametrize("minutes", [-1, 0, 65536])
async def test_set_timer_duration_out_of_range(vallox: Vallox, minutes):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_timer_duration(Profile.BOOST, minutes)

    vallox.set_values.assert_not_called()


@pytest.mark.parametrize("profile", PROFILES_WITHOUT_TIMER)
@pytest.mark.parametrize("minutes", [45, 0])
async def test_set_timer_duration_for_profile_without_timer(
    vallox: Vallox, profile, minutes
):
    # The profile is checked first: without a timer, the minutes don't matter.
    with pytest.raises(ValloxInvalidInputException, match="profile"):
        await vallox.set_timer_duration(profile, minutes)

    vallox.set_values.assert_not_called()
