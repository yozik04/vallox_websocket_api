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


@pytest.fixture
async def client_from_js(js_bundle):
    client = Client("127.0.0.1")
    await client.data_model.read_model_from_js_file(js_bundle)
    client._on_model_loaded()
    return client


async def test_set_profile_configuration_from_js(client_from_js, ws):
    values = {
        "A_CYC_FIREPLACE_AIR_TEMP_TARGET": 19.5,
        "A_CYC_BOOST_TIME": 180,
        "A_CYC_FIREPLACE_TIME": 15,
        "A_CYC_EXTRA_TIME": 90,
        "A_CYC_BOOST_TIMER_ENABLED": 1,
        "A_CYC_FIREPLACE_TIMER_ENABLED": 0,
        "A_CYC_EXTRA_TIMER_ENABLED": 1,
        "A_CYC_CF_HOME_SUPPLY_BASE_AIRFLOW": 60,
        "A_CYC_CF_HOME_EXTRACT_BASE_AIRFLOW": 55,
        "A_CYC_CF_AWAY_SUPPLY_BASE_AIRFLOW": 30,
        "A_CYC_CF_AWAY_EXTRACT_BASE_AIRFLOW": 25,
        "A_CYC_CF_BOOST_SUPPLY_BASE_AIRFLOW": 90,
        "A_CYC_CF_BOOST_EXTRACT_BASE_AIRFLOW": 85,
    }
    values = {
        metric: value
        for metric, value in values.items()
        if metric in client_from_js.data_model.addresses
    }
    assert values

    ws.recv.return_value = b""
    await client_from_js.set_values(values)

    ws.send.assert_called_once()
    request = client_from_js.messages.write_request.parse(ws.send.call_args.args[0])
    assert {item.address: item.value for item in request.fields.value["items"]} == {
        client_from_js.data_model.addresses[metric]: (
            29265 if metric == "A_CYC_FIREPLACE_AIR_TEMP_TARGET" else value
        )
        for metric, value in values.items()
    }


async def test_unrelated_profile_registers_remain_unsettable(client_from_js, ws):
    metrics = [
        metric
        for metric in ("A_CYC_EXTRA_ENABLED", "A_CYC_EXTRA_HEATER_TYPE")
        if metric in client_from_js.data_model.addresses
    ]
    assert metrics

    for metric in metrics:
        with pytest.raises(ValloxInvalidInputException):
            await client_from_js.set_values({metric: 1})
    ws.send.assert_not_called()


async def test_fetch_metric(client: Client, ws):
    ws.recv.return_value = binascii.unhexlify(
        "0024000000000000000000000000000001000800030000000000000061df98b100030003203fb9500331000000000000000000560000000000000000000000000000000000000000001b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b000f732a6ca969a171d1730800010000022700000028000000000000000001a6029e000100000028ffffffffffffffffffffffffffffffffffffffffffffffff000000000000000057c503e8ffffffffffff000000190000000000010000000000000000000300001b98012000a50000000000000000001e00010000000100000000000000000007001b000f001700010012000200070044000000010000000000000007003200320001000000000000001e0000c0a80501ffffff0000000000000000000000000000000000000000000000000000000000c0a8050c86076097f78844b7ac4db61e502fe4f2004c004c000100c00101001c001e000a00320000003703840000708f00320032000a0000000000010000000a721f0000000000010000000f728300000000000000000064715700000000000000000000000000000000000000010037001e000000000000000068bf71bb000083910000002600b4000000010001000000010001001e000f00080001001200000003000000000000000000000017000003e90000000000000001000100010000000a003200010000000000000000000000000000000000000000001000000000000000000000000000540048000000000000000000000000000000c8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    )

    result = await client.fetch_metrics()

    assert result["A_CYC_ENABLED"] == 1
    ws.send.assert_called_once_with(binascii.unhexlify("0300f6000000f900"))


@pytest.mark.parametrize(
    "timer",
    [
        "A_CYC_BOOST_TIMER",
        "A_CYC_FIREPLACE_TIMER",
        "A_CYC_EXTRA_TIMER",
        "A_CYC_BOOST_TIME",
        "A_CYC_FIREPLACE_TIME",
        "A_CYC_EXTRA_TIME",
    ],
)
async def test_fetch_metric_timer_without_time_limit(
    client: Client, ws, raw_table, timer
):
    ws.recv.return_value = raw_table(
        client, {timer: 0xFFFF, "A_CYC_CO2_SENSOR_0": 0xFFFF}
    )

    result = await client.fetch_metrics()

    # 65535 means "no time limit" for a profile timer or stored duration, and
    # reads back as written.
    assert result[timer] == 65535
    # For other registers 0xFFFF still means "undefined", e.g. an empty sensor slot.
    assert result["A_CYC_CO2_SENSOR_0"] is None


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


@pytest.mark.parametrize(
    "key",
    [
        "A_CYC_BOOST_TIMER_ENABLED",
        "A_CYC_FIREPLACE_TIMER_ENABLED",
        "A_CYC_EXTRA_TIMER_ENABLED",
    ],
)
async def test_set_timer_switch(client: Client, ws, key):
    await client.set_values({key: 0})

    request = client.messages.write_request.parse(ws.send.call_args.args[0])
    items = [(item.address, item.value) for item in request.fields.value["items"]]
    assert items == [(client.data_model.addresses[key], 0)]


@pytest.mark.parametrize(
    "values",
    [
        ({"A_CYC_BOOST_TIMER": "11.2"}),
        ({"A_CYC_BOOST_AIR_TEMP_TARGET": "11.a"}),
        ({"A_CYC_BOOST_SPEED_SETTING": "11.2"}),
        ({"A_CYC_FIREPLACE_SUPP_FAN": "11.2"}),
    ],
)
async def test_set_invalid(client: Client, ws, values):
    with pytest.raises(ValloxInvalidInputException):
        await client.set_values(values)

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
