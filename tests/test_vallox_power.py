import pytest

from vallox_websocket_api import MetricData, Vallox, ValloxInvalidInputException


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
def test_power_on(mode, expected):
    assert MetricData({"A_CYC_MODE": mode}).power_on is expected


def test_power_on_missing():
    assert MetricData({}).power_on is None


async def test_power_on_from_unit(vallox: Vallox, ws, raw_table):
    ws.recv.return_value = raw_table(vallox, {"A_CYC_MODE": 5})

    data = await vallox.fetch_metric_data()

    assert data.power_on is False


@pytest.mark.parametrize("on, written", [(True, 0), (False, 5)])
async def test_set_power_on(vallox: Vallox, ws, on, written):
    await vallox.set_power_on(on)

    ws.send.assert_called_once()
    assert _written_values(vallox, ws.send.call_args.args[0]) == {"A_CYC_MODE": written}


# Raw register values are rejected: 5 is truthy but means off, 0 is falsy but means on.
@pytest.mark.parametrize("on", [0, 1, 5, "off", None])
async def test_set_power_on_rejects_non_bool(vallox: Vallox, ws, on):
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_power_on(on)

    ws.send.assert_not_called()
