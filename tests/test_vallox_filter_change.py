from datetime import date
from unittest import mock

import pytest

from vallox_websocket_api import Vallox


@pytest.mark.parametrize(
    [
        "change_year",
        "change_month",
        "change_day",
        "change_interval",
        "expected_change_date",
        "expected_next_change_date",
    ],
    [
        (22, 1, 30, 180, date(2022, 1, 30), date(2022, 7, 29)),
        (21, 10, 19, 120, date(2021, 10, 19), date(2022, 2, 16)),
        (None, None, None, 120, None, None),
        (24, 2, 11, None, date(2024, 2, 11), None),
    ],
)
async def test_filter_change_date(
    vallox: Vallox,
    change_year,
    change_month,
    change_day,
    change_interval,
    expected_change_date,
    expected_next_change_date,
):
    vallox.fetch_metrics = mock.AsyncMock(
        return_value={
            "A_CYC_FILTER_CHANGED_YEAR": change_year,
            "A_CYC_FILTER_CHANGED_MONTH": change_month,
            "A_CYC_FILTER_CHANGED_DAY": change_day,
            "A_CYC_FILTER_CHANGE_INTERVAL": change_interval,
        }
    )

    data = await vallox.fetch_metric_data()
    assert data.filter_change_date == expected_change_date
    assert data.next_filter_change_date == expected_next_change_date
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
