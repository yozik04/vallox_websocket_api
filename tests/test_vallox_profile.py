from unittest import mock

import pytest

from vallox_websocket_api import Profile, Vallox


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
