from unittest import mock

from vallox_websocket_api import Profile, Vallox


async def test_set_profile_home(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()

    await vallox.set_profile(Profile.HOME)

    vallox.set_values.assert_called_once_with(
        {
            "A_CYC_STATE": 0,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )


async def test_set_profile_away(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()

    await vallox.set_profile(Profile.AWAY)

    vallox.set_values.assert_called_once_with(
        {
            "A_CYC_STATE": 1,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )


async def test_set_profile_boost(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()
    vallox.fetch_metric = mock.AsyncMock(return_value=30)

    await vallox.set_profile(Profile.BOOST)

    vallox.set_values.assert_called_once_with(
        {
            "A_CYC_BOOST_TIMER": 30,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    vallox.fetch_metric.assert_called_once_with("A_CYC_BOOST_TIME")


async def test_set_profile_fireplace(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()
    vallox.fetch_metric = mock.AsyncMock(return_value=30)

    await vallox.set_profile(Profile.FIREPLACE)

    vallox.set_values.assert_called_once_with(
        {
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 30,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    vallox.fetch_metric.assert_called_once_with("A_CYC_FIREPLACE_TIME")


async def test_set_profile_extra(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()
    vallox.fetch_metric = mock.AsyncMock(return_value=30)

    await vallox.set_profile(Profile.EXTRA)

    vallox.set_values.assert_called_once_with(
        {
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 30,
        }
    )

    vallox.fetch_metric.assert_called_once_with("A_CYC_EXTRA_TIME")


async def test_get_profile_home(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 0,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    assert await vallox.get_profile() == Profile.HOME

    _assert_profile_metrics_fetched(vallox)


async def test_get_profile_away(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 1,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    assert await vallox.get_profile() == Profile.AWAY

    _assert_profile_metrics_fetched(vallox)


async def test_get_profile_boost(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 0,
            "A_CYC_BOOST_TIMER": 30,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    assert await vallox.get_profile() == Profile.BOOST

    _assert_profile_metrics_fetched(vallox)

    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 1,
            "A_CYC_BOOST_TIMER": 30,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    assert await vallox.get_profile() == Profile.BOOST

    _assert_profile_metrics_fetched(vallox)


async def test_get_profile_fireplace(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 0,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 30,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    assert await vallox.get_profile() == Profile.FIREPLACE

    _assert_profile_metrics_fetched(vallox)

    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 1,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 30,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    assert await vallox.get_profile() == Profile.FIREPLACE

    _assert_profile_metrics_fetched(vallox)


async def test_get_profile_extra(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 0,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 30,
        }
    )

    assert await vallox.get_profile() == Profile.EXTRA

    _assert_profile_metrics_fetched(vallox)

    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_STATE": 1,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 30,
        }
    )

    assert await vallox.get_profile() == Profile.EXTRA

    _assert_profile_metrics_fetched(vallox)


def _assert_profile_metrics_fetched(vallox):
    vallox.fetch_metrics.assert_called_once()
