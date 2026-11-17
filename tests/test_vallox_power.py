import pytest

from vallox_websocket_api import MetricData, Vallox


def _written_values(vallox: Vallox, payload: bytes) -> dict[str, int]:
    """Decode a write request into {register name: value}."""
    request = vallox.messages.write_request.parse(payload)
    keys = {address: key for key, address in vallox.data_model.addresses.items()}
    return {keys[item.address]: item.value for item in request.fields.value["items"]}


@pytest.mark.parametrize(
    "mode, expected",
    [
        (0, True),  # C_CYC_MODE_NORMAL
        (5, False),  # C_CYC_MODE_OFF
        # Undocumented modes count as on, as in the web UI: only 5 is off.
        (1, True),  # C_CYC_MODE_TESTING
        (2, True),  # C_CYC_MODE_MANUAL
        (3, True),  # C_CYC_MODE_DEFROST
        (4, True),  # C_CYC_MODE_SELF_TEST
        (6, True),  # C_CYC_MODE_EMC_TEST
        (None, None),
    ],
)
def test_is_switched_on(mode, expected):
    assert MetricData({"A_CYC_MODE": mode}).is_switched_on is expected


def test_is_switched_on_missing():
    assert MetricData({}).is_switched_on is None


async def test_is_switched_on_from_unit(vallox: Vallox, ws, raw_table):
    ws.recv.return_value = raw_table(vallox, {"A_CYC_MODE": 5})

    data = await vallox.fetch_metric_data()

    assert data.is_switched_on is False


async def test_switch_on(vallox: Vallox, ws):
    await vallox.switch_on()

    ws.send.assert_called_once()
    assert _written_values(vallox, ws.send.call_args.args[0]) == {"A_CYC_MODE": 0}


async def test_switch_off(vallox: Vallox, ws):
    await vallox.switch_off()

    ws.send.assert_called_once()
    assert _written_values(vallox, ws.send.call_args.args[0]) == {"A_CYC_MODE": 5}
