"""Tests for Vallox WebSocket API sensor control functionality."""
from unittest import mock

import pytest

from vallox_websocket_api import (
    Profile,
    CellState,
    SupplyHeatingAdjustMode,
    DefrostMode,
    ValloxInvalidInputException,
)


@pytest.mark.asyncio
async def test_set_rh_sensor_control(vallox, ws):
    """Test setting RH sensor control."""
    vallox.set_values = mock.AsyncMock()

    # Test HOME profile
    await vallox.set_rh_sensor_control(Profile.HOME, True)
    vallox.set_values.assert_called_once_with({"A_CYC_HOME_RH_CTRL_ENABLED": True})
    vallox.set_values.reset_mock()

    # Test AWAY profile
    await vallox.set_rh_sensor_control(Profile.AWAY, False)
    vallox.set_values.assert_called_once_with({"A_CYC_AWAY_RH_CTRL_ENABLED": False})

    # Test invalid profile
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_control(Profile.FIREPLACE, True)


@pytest.mark.asyncio
async def test_set_co2_sensor_control(vallox, ws):
    """Test setting CO2 sensor control."""
    vallox.set_values = mock.AsyncMock()

    # Test HOME profile
    await vallox.set_co2_sensor_control(Profile.HOME, True)
    vallox.set_values.assert_called_once_with({"A_CYC_HOME_CO2_CTRL_ENABLED": True})
    vallox.set_values.reset_mock()

    # Test AWAY profile
    await vallox.set_co2_sensor_control(Profile.AWAY, False)
    vallox.set_values.assert_called_once_with({"A_CYC_AWAY_CO2_CTRL_ENABLED": False})

    # Test invalid profile
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_control(Profile.FIREPLACE, True)


@pytest.mark.asyncio
async def test_set_sensor_control_mode_and_limits(vallox, ws):
    """Test setting sensor control modes and limits."""
    vallox.set_values = mock.AsyncMock()

    # Test setting RH sensor mode
    await vallox.set_rh_sensor_control_mode(1)  # Manual mode
    vallox.set_values.assert_called_once_with({"A_CYC_RH_LEVEL_MODE": 1})
    vallox.set_values.reset_mock()

    # Test setting RH sensor limit
    await vallox.set_rh_sensor_limit(65)
    vallox.set_values.assert_called_once_with({"A_CYC_RH_BASIC_LEVEL": 65})
    vallox.set_values.reset_mock()

    # Test setting CO2 sensor limit
    await vallox.set_co2_sensor_limit(1000)
    vallox.set_values.assert_called_once_with({"A_CYC_CO2_THRESHOLD": 1000})
    vallox.set_values.reset_mock()

    # Test invalid RH sensor mode
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_control_mode(2)

    # Test invalid RH sensor limit
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_rh_sensor_limit(101)

    # Test invalid CO2 sensor limits
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_limit(499)  # Below minimum
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_co2_sensor_limit(2001)  # Above maximum


@pytest.mark.asyncio
async def test_set_supply_heating_adjust_mode(vallox, ws):
    """Test setting supply heating adjust mode."""
    vallox.set_values = mock.AsyncMock()

    # Test valid mode
    await vallox.set_supply_heating_adjust_mode(SupplyHeatingAdjustMode.EXTRACT)
    vallox.set_values.assert_called_once_with({"A_CYC_SUPPLY_HEATING_ADJUST_MODE": SupplyHeatingAdjustMode.EXTRACT.value})

    # Test invalid mode
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_supply_heating_adjust_mode(5)


@pytest.mark.asyncio
async def test_set_defrost_mode(vallox, ws):
    """Test setting defrost mode."""
    vallox.set_values = mock.AsyncMock()

    # Test valid mode
    await vallox.set_defrost_mode(DefrostMode.FAN_STOP)
    vallox.set_values.assert_called_once_with({"A_CYC_DEFROST_MODE": DefrostMode.FAN_STOP.value})

    # Test invalid mode
    with pytest.raises(ValloxInvalidInputException):
        await vallox.set_defrost_mode(5)


@pytest.mark.asyncio
async def test_get_sensor_controls_and_modes(vallox):
    """Test getting sensor controls and modes."""
    # Mock the metrics response
    vallox.fetch_metrics = mock.AsyncMock(return_value={
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
        "A_CYC_DEFROST_MODE": 0,
    })

    data = await vallox.fetch_metric_data()

    # Test RH sensor control status
    assert data.get_rh_sensor_control(Profile.HOME) == 1
    assert data.get_rh_sensor_control(Profile.AWAY) == 1
    assert data.get_rh_sensor_control(Profile.BOOST) == 1

    # Test CO2 sensor control status
    assert data.get_co2_sensor_control(Profile.HOME) == 1
    assert data.get_co2_sensor_control(Profile.AWAY) == 1
    assert data.get_co2_sensor_control(Profile.BOOST) == 1

    # Test sensor modes and limits
    assert data.get_rh_sensor_control_mode() == 0  # Automatic mode
    assert data.get_rh_sensor_limit() == 58
    assert data.get_co2_sensor_limit() == 800

    # Test supply heating adjust mode
    assert data.supply_heating_adjust_mode == SupplyHeatingAdjustMode.SUPPLY.value
    assert data.get_supply_heating_adjust_mode() == SupplyHeatingAdjustMode.SUPPLY
    assert data.get_supply_heating_adjust_mode_name() == "Supply"

    # Test defrost mode
    assert data.defrost_mode == DefrostMode.BYPASS.value
    assert data.get_defrost_mode() == DefrostMode.BYPASS
    assert data.get_defrost_mode_name() == "Bypass"

    # Test invalid profiles
    with pytest.raises(ValloxInvalidInputException):
        data.get_rh_sensor_control(Profile.FIREPLACE)
    with pytest.raises(ValloxInvalidInputException):
        data.get_co2_sensor_control(Profile.FIREPLACE)

    vallox.fetch_metrics.assert_called_once()
