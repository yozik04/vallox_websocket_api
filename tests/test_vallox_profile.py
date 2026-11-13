from unittest import mock

import pytest

from vallox_websocket_api import (
    MetricData,
    Profile,
    Vallox,
    ValloxInvalidInputException,
)

TIMERS = ["A_CYC_BOOST_TIMER", "A_CYC_FIREPLACE_TIMER", "A_CYC_EXTRA_TIMER"]

TIMED_PROFILES = [
    (Profile.BOOST, "A_CYC_BOOST_TIMER", "A_CYC_BOOST_TIMER_ENABLED"),
    (Profile.FIREPLACE, "A_CYC_FIREPLACE_TIMER", "A_CYC_FIREPLACE_TIMER_ENABLED"),
    (Profile.EXTRA, "A_CYC_EXTRA_TIMER", "A_CYC_EXTRA_TIMER_ENABLED"),
]


def _written_values(vallox: Vallox, payload: bytes):
    """Decode a write request into {register name: value}."""
    request = vallox.messages.write_request.parse(payload)
    keys = {address: key for key, address in vallox.data_model.addresses.items()}
    return {keys[item.address]: item.value for item in request.fields.value["items"]}


@pytest.mark.parametrize(
    "profile,fetch_metrics,expected_values",
    [
        (
            Profile.HOME,
            None,
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
        ),
        (
            Profile.AWAY,
            None,
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
        ),
        (
            Profile.BOOST,
            {"A_CYC_BOOST_TIME": 10},
            {
                "A_CYC_BOOST_TIMER": 10,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
        ),
        (
            Profile.FIREPLACE,
            {"A_CYC_FIREPLACE_TIME": 20},
            {
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 20,
                "A_CYC_EXTRA_TIMER": 0,
            },
        ),
        (
            Profile.EXTRA,
            {"A_CYC_EXTRA_TIME": 30},
            {
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 30,
            },
        ),
        (
            Profile.AUTO,
            None,
            {
                "A_CYC_STATE": 2,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
        ),
    ],
)
async def test_set_profile(vallox: Vallox, profile, fetch_metrics, expected_values):
    vallox.set_values = mock.AsyncMock()
    if profile in [Profile.BOOST, Profile.FIREPLACE, Profile.EXTRA]:
        vallox.fetch_metrics = mock.AsyncMock(return_value=fetch_metrics)
    else:
        vallox.fetch_metrics = mock.AsyncMock()
    await vallox.set_profile(profile)
    vallox.set_values.assert_called_once_with(expected_values)

    if fetch_metrics:
        vallox.fetch_metrics.assert_called_once()
    else:
        vallox.fetch_metrics.assert_not_called()


@pytest.mark.parametrize(
    "metrics_return, expected_profile, expected_duration",
    [
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.HOME,
            None,
        ),
        (
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.AWAY,
            None,
        ),
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 10,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.BOOST,
            10,
        ),
        (
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 11,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.BOOST,
            11,
        ),
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 20,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.FIREPLACE,
            20,
        ),
        (
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 21,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.FIREPLACE,
            21,
        ),
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 30,
            },
            Profile.EXTRA,
            30,
        ),
        (
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 31,
            },
            Profile.EXTRA,
            31,
        ),
        (
            {
                "A_CYC_STATE": 2,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.AUTO,
            None,
        ),
        # A timer of 65535 means "no time limit": the profile is active, and
        # there is no remaining duration to report.
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 65535,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.BOOST,
            None,
        ),
        (
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 65535,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.FIREPLACE,
            None,
        ),
        (
            {
                "A_CYC_STATE": 2,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 65535,
            },
            Profile.EXTRA,
            None,
        ),
        # With more than one timer running, the unit uses the mode with the
        # highest priority: EXTRA (Programmable), FIREPLACE (Custom), BOOST.
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 10,
                "A_CYC_FIREPLACE_TIMER": 20,
                "A_CYC_EXTRA_TIMER": 0,
            },
            Profile.FIREPLACE,
            20,
        ),
        (
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 10,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 30,
            },
            Profile.EXTRA,
            30,
        ),
        (
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 20,
                "A_CYC_EXTRA_TIMER": 30,
            },
            Profile.EXTRA,
            30,
        ),
        (
            {
                "A_CYC_STATE": 2,
                "A_CYC_BOOST_TIMER": 65535,
                "A_CYC_FIREPLACE_TIMER": 20,
                "A_CYC_EXTRA_TIMER": 30,
            },
            Profile.EXTRA,
            30,
        ),
    ],
)
async def test_profiles(
    vallox: Vallox, metrics_return, expected_profile, expected_duration
):
    vallox.fetch_metrics = mock.AsyncMock(return_value=metrics_return)

    data = await vallox.fetch_metric_data()
    assert data.profile == expected_profile

    assert data.get_remaining_profile_duration(data.profile) == expected_duration

    vallox.fetch_metrics.assert_called_once()


@pytest.mark.parametrize(
    "timer, expected_profile",
    [
        ("A_CYC_BOOST_TIMER", Profile.BOOST),
        ("A_CYC_FIREPLACE_TIMER", Profile.FIREPLACE),
        ("A_CYC_EXTRA_TIMER", Profile.EXTRA),
    ],
)
async def test_profile_without_time_limit_from_unit(
    vallox: Vallox, ws, raw_table, timer, expected_profile
):
    ws.recv.return_value = raw_table(vallox, {"A_CYC_STATE": 0, timer: 0xFFFF})

    data = await vallox.fetch_metric_data()

    assert data.get(timer) == 65535
    assert data.profile == expected_profile
    assert data.get_remaining_profile_duration(data.profile) is None


async def test_set_profile_without_time_limit_round_trip(vallox: Vallox, ws, raw_table):
    await vallox.set_profile(Profile.BOOST, 65535)

    written = _written_values(vallox, ws.send.call_args.args[0])
    assert written == {
        "A_CYC_BOOST_TIMER": 65535,
        "A_CYC_FIREPLACE_TIMER": 0,
        "A_CYC_EXTRA_TIMER": 0,
    }

    # Read back what was written, as the unit reports it.
    ws.recv.return_value = raw_table(
        vallox,
        {
            **written,
            "A_CYC_STATE": 0,
            "A_CYC_HOME_SPEED_SETTING": 30,
            "A_CYC_BOOST_SPEED_SETTING": 80,
        },
    )
    data = await vallox.fetch_metric_data()

    assert data.get("A_CYC_BOOST_TIMER") == 65535
    assert data.profile == Profile.BOOST
    assert data.get_remaining_profile_duration(data.profile) is None
    assert data.get_fan_speed(data.profile) == 80


@pytest.mark.parametrize("profile, timer, switch", TIMED_PROFILES)
@pytest.mark.parametrize("raw, expected", [(0, False), (1, True), (None, None)])
def test_get_timer_enabled(profile, timer, switch, raw, expected):
    data = MetricData({timer: 10, switch: raw})

    assert data.get_timer_enabled(profile) is expected


@pytest.mark.parametrize(
    "profile", [Profile.HOME, Profile.AWAY, Profile.AUTO, Profile.NONE]
)
def test_get_timer_enabled_for_profile_without_timer(profile):
    data = MetricData({switch: 1 for _, _, switch in TIMED_PROFILES})

    assert data.get_timer_enabled(profile) is None


@pytest.mark.parametrize("profile, timer, switch", TIMED_PROFILES)
@pytest.mark.parametrize(
    "countdown, enabled, expected",
    [
        (25, 1, 25),
        (25, None, 25),
        # The timer doesn't count down while its switch is off.
        (25, 0, None),
        (65535, 1, None),
        (65535, 0, None),
        (65535, None, None),
        # The profile isn't running.
        (0, 0, 0),
    ],
)
def test_remaining_profile_duration_with_timer_switch(
    profile, timer, switch, countdown, enabled, expected
):
    data = MetricData({timer: countdown, switch: enabled})

    assert data.get_remaining_profile_duration(profile) == expected


@pytest.mark.parametrize("profile, timer, switch", TIMED_PROFILES)
async def test_set_profile_with_duration_switches_timer_on(
    vallox: Vallox, ws, profile, timer, switch
):
    await vallox.set_profile(profile, 45)

    # One write request: the timer register and the timer switch together.
    ws.send.assert_called_once()
    assert _written_values(vallox, ws.send.call_args.args[0]) == {
        **dict.fromkeys(TIMERS, 0),
        timer: 45,
        switch: 1,
    }


@pytest.mark.parametrize("duration", [-1, 65536, "invalid"])
async def test_set_profile_rejects_invalid_duration(vallox: Vallox, ws, duration):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_profile(Profile.BOOST, duration)

    ws.send.assert_not_called()


@pytest.mark.parametrize("profile, timer, switch", TIMED_PROFILES)
async def test_set_profile_without_time_limit_keeps_timer_switch(
    vallox: Vallox, ws, profile, timer, switch
):
    await vallox.set_profile(profile, 65535)

    ws.send.assert_called_once()
    assert _written_values(vallox, ws.send.call_args.args[0]) == {
        **dict.fromkeys(TIMERS, 0),
        timer: 65535,
    }


@pytest.mark.parametrize("profile, timer, switch", TIMED_PROFILES)
@pytest.mark.parametrize("duration", [None, 0])
async def test_set_profile_with_stored_duration_keeps_timer_switch(
    vallox: Vallox, ws, raw_table, profile, timer, switch, duration
):
    stored = {
        Profile.BOOST: "A_CYC_BOOST_TIME",
        Profile.FIREPLACE: "A_CYC_FIREPLACE_TIME",
        Profile.EXTRA: "A_CYC_EXTRA_TIME",
    }[profile]
    ws.recv.return_value = raw_table(vallox, {stored: 30, switch: 0})

    await vallox.set_profile(profile, duration)

    # The first request reads the stored duration, the second one writes.
    assert ws.send.call_count == 2
    assert _written_values(vallox, ws.send.call_args.args[0]) == {
        **dict.fromkeys(TIMERS, 0),
        timer: 30,
    }


@pytest.mark.parametrize("profile, timer, switch", TIMED_PROFILES)
async def test_set_profile_with_stored_duration_without_time_limit(
    vallox: Vallox, ws, raw_table, profile, timer, switch
):
    stored = {
        Profile.BOOST: "A_CYC_BOOST_TIME",
        Profile.FIREPLACE: "A_CYC_FIREPLACE_TIME",
        Profile.EXTRA: "A_CYC_EXTRA_TIME",
    }[profile]
    # The web UI stores 65535 for a duration of 1092:15.
    ws.recv.return_value = raw_table(vallox, {stored: 0xFFFF, switch: 1})

    data = await vallox.fetch_metric_data()
    assert data.get(stored) == 65535
    assert data.get_timer_duration(profile) == 65535

    await vallox.set_profile(profile)

    # The stored duration is copied into the timer: no time limit.
    assert _written_values(vallox, ws.send.call_args.args[0]) == {
        **dict.fromkeys(TIMERS, 0),
        timer: 65535,
    }
