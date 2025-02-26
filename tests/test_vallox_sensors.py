"""Tests for Vallox WebSocket API sensor control functionality."""

from unittest import mock

import pytest

from vallox_websocket_api import (
    CellState,
    DefrostMode,
    Profile,
    SupplyHeatingAdjustMode,
    ValloxInvalidInputException,
)


@pytest.mark.parametrize(
    "profile, enabled",
    [
        (Profile.HOME, True),
        (Profile.HOME, False),
        (Profile.AWAY, True),
        (Profile.AWAY, False),
        (Profile.BOOST, True),
        (Profile.BOOST, False),
    ],
)
@pytest.mark.asyncio
async def test_set_rh_sensor_control(vallox, profile, enabled):
    """Test setting RH sensor control."""
    vallox.set_values = mock.AsyncMock()
    await vallox.set_rh_sensor_control(profile, enabled)
    vallox.set_values.assert_called_once_with(
        {f"A_CYC_{profile.name}_RH_CTRL_ENABLED": enabled}
    )


@pytest.mark.asyncio
async def test_set_rh_sensor_control_for_invalid_profile(vallox):
    """Test setting RH sensor control with invalid profile."""
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_control(Profile.FIREPLACE, True)
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_control(Profile.EXTRA, True)


@pytest.mark.parametrize(
    "profile, enabled",
    [
        (Profile.HOME, True),
        (Profile.HOME, False),
        (Profile.AWAY, True),
        (Profile.AWAY, False),
        (Profile.BOOST, True),
        (Profile.BOOST, False),
    ],
)
@pytest.mark.asyncio
async def test_set_co2_sensor_control(vallox, profile, enabled):
    """Test setting CO2 sensor control."""
    vallox.set_values = mock.AsyncMock()
    await vallox.set_co2_sensor_control(profile, enabled)
    vallox.set_values.assert_called_once_with(
        {f"A_CYC_{profile.name}_CO2_CTRL_ENABLED": enabled}
    )


@pytest.mark.asyncio
async def test_set_co2_sensor_control_with_invalid_profile(vallox):
    """Test setting CO2 sensor control with invalid profile."""
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_control(Profile.FIREPLACE, True)
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_control(Profile.EXTRA, True)


@pytest.mark.parametrize(
    "mode, expected",
    [
        (True, 1),
        (False, 0),
        (1, 1),
        (0, 0),
    ],
)
@pytest.mark.asyncio
async def test_set_sensor_control_mode(vallox, mode, expected):
    """Test setting sensor control modes and limits."""
    vallox.set_values = mock.AsyncMock()

    await vallox.set_rh_sensor_manual_control_mode(mode)  # Manual mode
    vallox.set_values.assert_called_once_with({"A_CYC_RH_LEVEL_MODE": expected})

    # Test invalid RH sensor mode
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_manual_control_mode(2)


@pytest.mark.asyncio
async def test_set_sensor_control_limits(vallox):
    """Test setting sensor control modes and limits."""
    vallox.set_values = mock.AsyncMock()

    # Test setting RH sensor limit
    await vallox.set_rh_sensor_limit(65)
    vallox.set_values.assert_called_once_with({"A_CYC_RH_BASIC_LEVEL": 65})
    vallox.set_values.reset_mock()

    # Test setting CO2 sensor limit
    await vallox.set_co2_sensor_limit(1000)
    vallox.set_values.assert_called_once_with({"A_CYC_CO2_THRESHOLD": 1000})
    vallox.set_values.reset_mock()

    # Test invalid RH sensor limit
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_limit(101)

    # Test invalid CO2 sensor limits
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_limit(499)  # Below minimum
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_limit(2001)  # Above maximum


@pytest.mark.parametrize(
    "adjust_mode",
    [
        SupplyHeatingAdjustMode.SUPPLY,
        SupplyHeatingAdjustMode.EXTRACT,
        SupplyHeatingAdjustMode.COOLING,
    ],
)
@pytest.mark.asyncio
async def test_set_supply_heating_adjust_mode(vallox, adjust_mode):
    """Test setting supply heating adjust mode."""
    vallox.set_values = mock.AsyncMock()

    await vallox.set_supply_heating_adjust_mode(adjust_mode)
    vallox.set_values.assert_called_once_with(
        {"A_CYC_SUPPLY_HEATING_ADJUST_MODE": adjust_mode.value}
    )


@pytest.mark.asyncio
async def test_set_supply_heating_adjust_mode_with_invalid_mode(vallox):
    """Test setting supply heating adjust mode with invalid mode."""
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_supply_heating_adjust_mode(5)


@pytest.mark.parametrize(
    "defrost_mode",
    [
        DefrostMode.BYPASS,
        DefrostMode.FAN_STOP,
    ],
)
@pytest.mark.asyncio
async def test_set_defrost_mode(vallox, defrost_mode):
    """Test setting defrost mode."""
    vallox.set_values = mock.AsyncMock()

    await vallox.set_defrost_mode(defrost_mode)
    vallox.set_values.assert_called_once_with(
        {"A_CYC_DEFROST_MODE": defrost_mode.value}
    )


@pytest.mark.asyncio
async def test_set_defrost_mode_with_invalid_mode(vallox):
    """Test setting defrost mode with invalid mode."""
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_defrost_mode(5)


@pytest.mark.parametrize(
    "metrics_response",
    [
        {
            "A_CYC_HOME_RH_CTRL_ENABLED": 1,
            "A_CYC_AWAY_RH_CTRL_ENABLED": 1,
            "A_CYC_BOOST_RH_CTRL_ENABLED": 1,
            "A_CYC_HOME_CO2_CTRL_ENABLED": 1,
            "A_CYC_AWAY_CO2_CTRL_ENABLED": 1,
            "A_CYC_BOOST_CO2_CTRL_ENABLED": 1,
            "A_CYC_RH_LEVEL_MODE": 0,
            "A_CYC_RH_BASIC_LEVEL": 58,
            "A_CYC_CO2_THRESHOLD": 800,
            "A_CYC_SUPPLY_HEATING_ADJUST_MODE": 0,
        },
        {
            "A_CYC_HOME_RH_CTRL_ENABLED": 0,
            "A_CYC_AWAY_RH_CTRL_ENABLED": 0,
            "A_CYC_BOOST_RH_CTRL_ENABLED": 0,
            "A_CYC_HOME_CO2_CTRL_ENABLED": 0,
            "A_CYC_AWAY_CO2_CTRL_ENABLED": 0,
            "A_CYC_BOOST_CO2_CTRL_ENABLED": 0,
            "A_CYC_RH_LEVEL_MODE": 1,
            "A_CYC_RH_BASIC_LEVEL": 50,
            "A_CYC_CO2_THRESHOLD": 750,
            "A_CYC_SUPPLY_HEATING_ADJUST_MODE": 1,
        },
        {
            "A_CYC_HOME_RH_CTRL_ENABLED": 0,
            "A_CYC_AWAY_RH_CTRL_ENABLED": 1,
            "A_CYC_BOOST_RH_CTRL_ENABLED": 0,
            "A_CYC_HOME_CO2_CTRL_ENABLED": 1,
            "A_CYC_AWAY_CO2_CTRL_ENABLED": 0,
            "A_CYC_BOOST_CO2_CTRL_ENABLED": 1,
            "A_CYC_RH_LEVEL_MODE": 0,
            "A_CYC_RH_BASIC_LEVEL": 60,
            "A_CYC_CO2_THRESHOLD": 850,
            "A_CYC_SUPPLY_HEATING_ADJUST_MODE": 2,
        },
        {
            "A_CYC_HOME_RH_CTRL_ENABLED": 1,
            "A_CYC_AWAY_RH_CTRL_ENABLED": 0,
            "A_CYC_BOOST_RH_CTRL_ENABLED": 1,
            "A_CYC_HOME_CO2_CTRL_ENABLED": 0,
            "A_CYC_AWAY_CO2_CTRL_ENABLED": 1,
            "A_CYC_BOOST_CO2_CTRL_ENABLED": 0,
            "A_CYC_RH_LEVEL_MODE": 1,
            "A_CYC_RH_BASIC_LEVEL": 55,
            "A_CYC_CO2_THRESHOLD": 900,
            "A_CYC_SUPPLY_HEATING_ADJUST_MODE": 0,
        },
    ],
)
@pytest.mark.asyncio
async def test_get_sensor_controls_and_modes(vallox, metrics_response):
    """Test getting sensor controls and modes."""
    # Mock the metrics response
    vallox.fetch_metrics = mock.AsyncMock(return_value=metrics_response)

    data = await vallox.fetch_metric_data()

    # Test RH sensor control status
    assert isinstance(data.get_rh_sensor_control(Profile.HOME), bool)
    assert (
        data.get_rh_sensor_control(Profile.HOME)
        == metrics_response["A_CYC_HOME_RH_CTRL_ENABLED"]
    )
    assert (
        data.get_rh_sensor_control(Profile.AWAY)
        == metrics_response["A_CYC_AWAY_RH_CTRL_ENABLED"]
    )
    assert (
        data.get_rh_sensor_control(Profile.BOOST)
        == metrics_response["A_CYC_BOOST_RH_CTRL_ENABLED"]
    )

    # Test CO2 sensor control status
    assert isinstance(data.get_co2_sensor_control(Profile.HOME), bool)
    assert (
        data.get_co2_sensor_control(Profile.HOME)
        == metrics_response["A_CYC_HOME_CO2_CTRL_ENABLED"]
    )
    assert (
        data.get_co2_sensor_control(Profile.AWAY)
        == metrics_response["A_CYC_AWAY_CO2_CTRL_ENABLED"]
    )
    assert (
        data.get_co2_sensor_control(Profile.BOOST)
        == metrics_response["A_CYC_BOOST_CO2_CTRL_ENABLED"]
    )

    # Test sensor modes and limits
    assert isinstance(data.rh_sensor_manual_control_mode, bool)
    assert data.rh_sensor_manual_control_mode == bool(
        metrics_response["A_CYC_RH_LEVEL_MODE"]
    )
    assert data.rh_sensor_limit == metrics_response["A_CYC_RH_BASIC_LEVEL"]
    assert data.co2_sensor_limit == metrics_response["A_CYC_CO2_THRESHOLD"]

    # Test supply heating adjust mode
    assert isinstance(data.supply_heating_adjust_mode, SupplyHeatingAdjustMode)
    assert data.supply_heating_adjust_mode == SupplyHeatingAdjustMode(
        metrics_response["A_CYC_SUPPLY_HEATING_ADJUST_MODE"]
    )
    assert (
        data.supply_heating_adjust_mode.name
        == SupplyHeatingAdjustMode(
            metrics_response["A_CYC_SUPPLY_HEATING_ADJUST_MODE"]
        ).name
    )

    # Test valid profiles without specific RH and CO2 sensor control metrics
    with pytest.raises(ValloxInvalidInputException):
        data.get_rh_sensor_control(Profile.FIREPLACE)
    with pytest.raises(ValloxInvalidInputException):
        data.get_rh_sensor_control(Profile.EXTRA)
    with pytest.raises(ValloxInvalidInputException):
        data.get_co2_sensor_control(Profile.FIREPLACE)
    with pytest.raises(ValloxInvalidInputException):
        data.get_co2_sensor_control(Profile.EXTRA)

    vallox.fetch_metrics.assert_called_once()


@pytest.mark.parametrize(
    "defrost_mode_value, expected_defrost_mode",
    [
        (0, DefrostMode.BYPASS),
        (1, DefrostMode.FAN_STOP),
    ],
)
@pytest.mark.asyncio
async def test_get_defrost_mode(vallox, defrost_mode_value, expected_defrost_mode):
    """Test getting defrost mode."""
    # Mock the metrics response
    metrics_response = {"A_CYC_DEFROST_MODE": defrost_mode_value}
    vallox.fetch_metrics = mock.AsyncMock(return_value=metrics_response)

    data = await vallox.fetch_metric_data()

    # Test defrost mode
    assert isinstance(data.defrost_mode, DefrostMode)
    assert data.defrost_mode == expected_defrost_mode

    vallox.fetch_metrics.assert_called_once()


@pytest.mark.parametrize(
    "cell_state_value, expected_cell_state",
    [
        (0, CellState.HEAT_RECOVERY),
        (1, CellState.COOL_RECOVERY),
        (2, CellState.BYPASS),
        (3, CellState.DEFROST),
    ],
)
@pytest.mark.asyncio
async def test_get_cell_state(vallox, cell_state_value, expected_cell_state):
    """Test getting cell state."""
    # Mock the metrics response
    metrics_response = {"A_CYC_CELL_STATE": cell_state_value}
    vallox.fetch_metrics = mock.AsyncMock(return_value=metrics_response)

    data = await vallox.fetch_metric_data()

    # Test cell state
    assert isinstance(data.cell_state, CellState)
    assert data.cell_state == expected_cell_state

    vallox.fetch_metrics.assert_called_once()
