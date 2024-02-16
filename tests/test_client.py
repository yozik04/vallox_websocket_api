import asyncio
import binascii
from unittest.mock import AsyncMock, patch

import pytest
from websockets.exceptions import ConnectionClosed, InvalidMessage, InvalidURI

from vallox_websocket_api import (
    Client,
    ValloxInvalidInputException,
    ValloxWebsocketException,
)


async def test_fetch_metric(client: Client, ws):
    ws.recv.return_value = binascii.unhexlify(
        "0024000000000000000000000000000001000800030000000000000061df98b100030003203fb9500331000000000000000000560000000000000000000000000000000000000000001b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b000f732a6ca969a171d1730800010000022700000028000000000000000001a6029e000100000028ffffffffffffffffffffffffffffffffffffffffffffffff000000000000000057c503e8ffffffffffff000000190000000000010000000000000000000300001b98012000a50000000000000000001e00010000000100000000000000000007001b000f001700010012000200070044000000010000000000000007003200320001000000000000001e0000c0a80501ffffff0000000000000000000000000000000000000000000000000000000000c0a8050c86076097f78844b7ac4db61e502fe4f2004c004c000100c00101001c001e000a00320000003703840000708f00320032000a0000000000010000000a721f0000000000010000000f728300000000000000000064715700000000000000000000000000000000000000010037001e000000000000000068bf71bb000083910000002600b4000000010001000000010001001e000f00080001001200000003000000000000000000000017000003e90000000000000001000100010000000a003200010000000000000000000000000000000000000000001000000000000000000000000000540048000000000000000000000000000000c8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    )

    result = await client.fetch_metrics()

    assert result["A_CYC_ENABLED"] == 1
    ws.send.assert_called_once_with(binascii.unhexlify("0300f6000000f900"))


async def test_set_temp_value(client: Client, ws):
    await client.set_values({"A_CYC_BOOST_AIR_TEMP_TARGET": "19"})

    ws.send.assert_called_once_with(binascii.unhexlify("0400f90022501f723ec3"))


async def test_set_temp_value_fraction(client: Client, ws):
    await client.set_values({"A_CYC_BOOST_AIR_TEMP_TARGET": "19.1"})

    ws.send.assert_called_once_with(binascii.unhexlify("0400f9002250297248c3"))


async def test_set_temp_value_fraction_rounding1(client: Client, ws):
    await client.set_values({"A_CYC_BOOST_AIR_TEMP_TARGET": "19.145"})

    ws.send.assert_called_once_with(binascii.unhexlify("0400f9002250297248c3"))


async def test_set_temp_value_fraction_rounding2(client: Client, ws):
    await client.set_values({"A_CYC_BOOST_AIR_TEMP_TARGET": "18.991"})

    ws.send.assert_called_once_with(binascii.unhexlify("0400f90022501f723ec3"))


async def test_set_value(client: Client, ws):
    await client.set_values(
        {
            "A_CYC_STATE": 0,
            "A_CYC_BOOST_TIMER": 0,
            "A_CYC_FIREPLACE_TIMER": 0,
            "A_CYC_EXTRA_TIMER": 0,
        }
    )

    ws.send.assert_called_once_with(
        binascii.unhexlify("0a00f900011200000412000005120000061200001349")
    )


async def test_set_assertion(client: Client, ws):
    with pytest.raises(ValloxInvalidInputException):
        await client.set_values({"A_CYC_BOOST_TIMER": "11.2"})

    with pytest.raises(ValloxInvalidInputException):
        await client.set_values({"A_CYC_BOOST_AIR_TEMP_TARGET": "11.a"})

    with pytest.raises(ValloxInvalidInputException):
        await client.set_values({"A_CYC_BOOST_SPEED_SETTING": "11.2"})

    with pytest.raises(ValloxInvalidInputException):
        await client.set_values({"A_CYC_FIREPLACE_SUPP_FAN": "11.2"})

    ws.send.assert_not_called()


async def test_set_missing(client: Client, ws):
    with pytest.raises(ValloxInvalidInputException):
        await client.set_values({"A_CYC_BOOSTER": 10})

    ws.send.assert_not_called()


async def test_set_unsettable(client: Client, ws):
    with pytest.raises(ValloxInvalidInputException):
        await client.set_values({"A_CYC_RH_VALUE": 22})

    ws.send.assert_not_called()


async def test_set_new_settable_address_by_name(client: Client, ws):
    client.set_settable_address("A_CYC_RH_VALUE", int)

    await client.set_values({"A_CYC_RH_VALUE": 22})


async def test_set_new_settable_address_by_address(client: Client, ws):
    client.set_settable_address(4363, int)

    await client.set_values({"A_CYC_RH_VALUE": 22})


async def test_set_new_settable_address_by_address_exception(client: Client, ws):
    ws.recv.side_effect = AsyncMock(side_effect=InvalidMessage())

    client.set_settable_address(4363, int)

    with pytest.raises(ValloxWebsocketException):
        await client.set_values({"A_CYC_RH_VALUE": 22})

    assert ws.send.call_count == 5


async def test_connection_closed_ws_exception(client: Client, ws):
    ws.recv.side_effect = AsyncMock(side_effect=ConnectionClosed(None, None))

    with pytest.raises(ValloxWebsocketException):
        await client.fetch_metrics()

    assert ws.send.call_count == 5


async def test_ws_recv_timeout_exception(client: Client, ws):
    ws.recv.side_effect = AsyncMock(side_effect=asyncio.TimeoutError())

    with pytest.raises(ValloxWebsocketException):
        await client.fetch_metrics()

    assert ws.send.call_count == 5


async def test_invalid_ws_url_exception(client: Client):
    with patch("websockets.client.connect") as connect:
        connect.side_effect = InvalidURI("test", "test")

        with pytest.raises(ValloxWebsocketException):
            await client.fetch_metrics()

        assert connect.call_count == 1


async def test_ws_connection_timeout_exception(client: Client):
    with patch("websockets.client.connect") as connect:
        connect.side_effect = asyncio.TimeoutError()

        with pytest.raises(ValloxWebsocketException):
            await client.fetch_metrics()

        assert connect.call_count == 5
