from datetime import datetime
from unittest import mock

import pytest

from vallox_websocket_api import Vallox, ValloxInvalidInputException


async def test_set_date_time(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()

    await vallox.set_date_time(datetime(2025, 3, 7, 14, 51))

    assert vallox.set_values.await_args_list == [
        mock.call({"A_CYC_MINUTE": 51, "A_CYC_HOUR": 14}),
        mock.call({"A_CYC_DAY": 7, "A_CYC_MONTH": 3, "A_CYC_YEAR": 25}),
    ]


async def test_set_date_time_invalid_year(vallox: Vallox):
    vallox.set_values = mock.AsyncMock()

    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_date_time(datetime(1999, 1, 1))
    vallox.set_values.assert_not_called()


async def test_date_time_keys_are_writable(client):
    client._websocket_request = mock.AsyncMock()

    await client.set_values(
        {"A_CYC_MINUTE": 51, "A_CYC_HOUR": 14, "A_CYC_DAY": 7, "A_CYC_MONTH": 3}
    )
    client._websocket_request.assert_awaited_once()
