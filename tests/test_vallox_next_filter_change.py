from datetime import date
from unittest import mock

from vallox_websocket_api import Vallox


async def test_checkNextFilterChangeDate(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_FILTER_CHANGED_YEAR": 22,
            "A_CYC_FILTER_CHANGED_MONTH": 1,
            "A_CYC_FILTER_CHANGED_DAY": 30,
            "A_CYC_FILTER_CHANGE_INTERVAL": 180,
        }
    )

    assert await vallox.get_next_filter_change_date() == date(2022, 7, 29)
    vallox.fetch_metrics.assert_called_once()


async def test_nextFilterChangeInTheFuture(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_FILTER_CHANGED_YEAR": 21,
            "A_CYC_FILTER_CHANGED_MONTH": 10,
            "A_CYC_FILTER_CHANGED_DAY": 19,
            "A_CYC_FILTER_CHANGE_INTERVAL": 120,
        }
    )

    assert await vallox.get_next_filter_change_date() == date(2022, 2, 16)
    vallox.fetch_metrics.assert_called_once()


async def test_nextFilterChangeTomorrow(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_FILTER_CHANGED_YEAR": 21,
            "A_CYC_FILTER_CHANGED_MONTH": 10,
            "A_CYC_FILTER_CHANGED_DAY": 18,
            "A_CYC_FILTER_CHANGE_INTERVAL": 120,
        }
    )

    assert await vallox.get_next_filter_change_date() == date(2022, 2, 15)
    vallox.fetch_metrics.assert_called_once()


async def test_nextFilterChangeToday(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_FILTER_CHANGED_YEAR": 21,
            "A_CYC_FILTER_CHANGED_MONTH": 10,
            "A_CYC_FILTER_CHANGED_DAY": 17,
            "A_CYC_FILTER_CHANGE_INTERVAL": 120,
        }
    )

    assert await vallox.get_next_filter_change_date() == date(2022, 2, 14)
    vallox.fetch_metrics.assert_called_once()


async def test_nextFilterChangeYesterday(vallox: Vallox):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_FILTER_CHANGE_INTERVAL": 120,
        }
    )

    assert await vallox.get_next_filter_change_date() is None
    vallox.fetch_metrics.assert_called_once()


async def test_set_filter_change_date(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()

    await vallox.set_filter_change_date(date(2024, 2, 11))

    vallox.set_values.assert_called_once_with(
        {
            "A_CYC_FILTER_CHANGED_DAY": 11,
            "A_CYC_FILTER_CHANGED_MONTH": 2,
            "A_CYC_FILTER_CHANGED_YEAR": 24,
        }
    )
