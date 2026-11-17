import pytest

from vallox_websocket_api import MetricData, Vallox


def _written_values(vallox: Vallox, payload: bytes) -> dict[str, int]:
    """Decode a write request into {register name: value}."""
    request = vallox.messages.write_request.parse(payload)
    keys = {address: key for key, address in vallox.data_model.addresses.items()}
    return {keys[item.address]: item.value for item in request.fields.value["items"]}


@pytest.mark.parametrize("locked, expected", [(1, True), (0, False), (None, None)])
def test_is_bypass_locked(locked, expected):
    assert MetricData({"A_CYC_BYPASS_LOCKED": locked}).is_bypass_locked is expected


def test_is_bypass_locked_missing():
    assert MetricData({}).is_bypass_locked is None


async def test_is_bypass_locked_from_unit(vallox: Vallox, ws, raw_table):
    ws.recv.return_value = raw_table(vallox, {"A_CYC_BYPASS_LOCKED": 1})

    data = await vallox.fetch_metric_data()

    assert data.is_bypass_locked is True


@pytest.mark.parametrize("locked, written", [(True, 1), (False, 0)])
async def test_set_bypass_locked(vallox: Vallox, ws, locked, written):
    await vallox.set_bypass_locked(locked)

    ws.send.assert_called_once()
    assert _written_values(vallox, ws.send.call_args.args[0]) == {
        "A_CYC_BYPASS_LOCKED": written
    }
