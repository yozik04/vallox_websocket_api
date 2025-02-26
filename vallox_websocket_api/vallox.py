from dataclasses import dataclass
import datetime
from datetime import date, timedelta
from enum import Enum, IntEnum
import logging
from typing import Dict, Optional, Union
from uuid import UUID

from vallox_websocket_api.exceptions import ValloxInvalidInputException

from .client import Client, MetricDict, MetricValue
from .data.constants import ALARM_MESSAGES

logger = logging.getLogger("vallox").getChild(__name__)


class Profile(IntEnum):
    NONE = 0
    HOME = 1
    AWAY = 2
    BOOST = 3
    FIREPLACE = 4
    EXTRA = 5


PROFILE_TO_SET_TEMPERATURE_METRIC_MAP = {
    Profile.HOME: "A_CYC_HOME_AIR_TEMP_TARGET",
    Profile.AWAY: "A_CYC_AWAY_AIR_TEMP_TARGET",
    Profile.BOOST: "A_CYC_BOOST_AIR_TEMP_TARGET",
}

PROFILE_TO_SET_FAN_SPEED_METRIC_MAP = {
    Profile.HOME: "A_CYC_HOME_SPEED_SETTING",
    Profile.AWAY: "A_CYC_AWAY_SPEED_SETTING",
    Profile.BOOST: "A_CYC_BOOST_SPEED_SETTING",
}

PROFILE_TO_SET_RH_SENSOR_CONTROL_METRIC_MAP = {
    Profile.HOME: "A_CYC_HOME_RH_CTRL_ENABLED",
    Profile.AWAY: "A_CYC_AWAY_RH_CTRL_ENABLED",
    Profile.BOOST: "A_CYC_BOOST_RH_CTRL_ENABLED",
}

PROFILE_TO_SET_CO2_SENSOR_CONTROL_METRIC_MAP = {
    Profile.HOME: "A_CYC_HOME_CO2_CTRL_ENABLED",
    Profile.AWAY: "A_CYC_AWAY_CO2_CTRL_ENABLED",
    Profile.BOOST: "A_CYC_BOOST_CO2_CTRL_ENABLED",
}

SET_RH_SENSOR_CONTROL_MODE = "A_CYC_RH_LEVEL_MODE"
SET_RH_SENSOR_CONTROL_LIMIT = "A_CYC_RH_BASIC_LEVEL"
SET_CO2_SENSOR_CONTROL_LIMIT = "A_CYC_CO2_THRESHOLD"


class CellState(IntEnum):
    HEAT_RECOVERY = 0  # C_CYC_CELL_STATE_HEATRECO
    COOL_RECOVERY = 1  # C_CYC_CELL_STATE_COOLRECO
    BYPASS = 2  # C_CYC_CELL_STATE_BYPASS
    DEFROST = 3  # C_CYC_CELL_STATE_DEFROST


class SupplyHeatingAdjustMode(IntEnum):
    SUPPLY = 0  # C_CYC_HEATING_SUPPLY
    EXTRACT = 1  # C_CYC_HEATING_EXTRACT
    COOLING = 2  # C_CYC_HEATING_COOLING


class DefrostMode(IntEnum):
    BYPASS = 0  # C_CYC_BYPASS_MODE
    FAN_STOP = 1  # C_CYC_FAN_STOP_MODE


DEVICE_MODEL = [
    None,
    "Vallox 096 MV",
    "Vallox 110 MV",
    "Vallox 145 MV",
    "Vallox 245 MV",
    "ValloPlus 270 MV",
    "ValloPlus 350 MV",
    "ValloPlus 510 MV",
    "ValloPlus 850 MV",
    "Vallox TSK Multi 50 MV",
    "Vallox TSK Multi 80 MV",
    "ValloMulti 200 MV",
    "ValloMulti 300 MV",
    "DV96 Adroit",
    "DV110 Adroit",
    "DV145 Adroit",
    "DV245 Adroit",
    "DV TSK Multi 50 Adroit",
    "DV TSK Multi 80 Adroit",
    "ValloPlus 350 MV-E",
    "Aito kotilämpökone",
    "Vallox 90 MV",
    "Vallox 90K MV",
    "ValloPlus 240 MV",
    "ValloPlus 240-K MV",
    "ValloPlus 240-E MV",
    "DV90 Adroit",
    "DV90K Adroit",
    "Vallox 101 MV",
    "ValloPlus 270 MV-E",
    "ValloPlus 510 MV-E",
    "ValloPlus 850 MV-E",
    "ValloMulti 200 MV-E",
    "ValloMulti 300 MV-E",
    "Vallox 51 MV",
    "Vallox 51K MV",
    "ValloPlus 180 MV",
    "ValloPlus 180-K MV",
    "ValloPlus 180-E MV",
    "DV51 Adroit",
    "DV51K Adroit",
    "KWL 170 W",
    "KWL 170 W ET",
    "KWL 200 W R",
    "KWL 200 W L",
    "KWL 200 W ET R",
    "KWL 200 W ET L",
    "KWL 300 W R",
    "KWL 300 W L",
    "KWL 300 W ET R",
    "KWL 300 W ET L",
    "KWL 500 W R",
    "KWL 500 W L",
    "KWL 500 W ET R",
    "KWL 500 W ET L",
    "KWL 220 D R",
    "KWL 220 D L",
    "KWL 340 D R",
    "KWL 340 D L",
    "KWL 360 W",
    "KWL 360 W ET",
    "KWL 250 W",
    "KWL 250 W ET",
    "KWL 470 W",
    "KWL 470 W ET",
    "NA",
    "NA",
    "NA",
    "NA",
    "NA",
    "NA, Helios check Frost protection",
    "NA, Reserved for Helios",
    "TSK Multi 50 MV-E ",
    "TSK Multi 80 MV-E ",
    "Vallox 096 MV-E ",
    "Vallox 110 MV-E ",
    "Vallox 145 MV-E ",
    "Vallox 245 MV-E ",
    "Vallox 51 MV-E ",
    "Vallox 101 MV-E ",
    "Vallox 139 MV",
    "Vallox 139 MV-E",
    "DV 139 adroit",
    "Vallox 99 MV",
    "Vallox 99 MV CF",
    "ValloPlus 370 MV",
    "ValloPlus 370 MV-E",
    "Vallox 125 MV",
    "KWL 890 W L",
    "KWL 890 W R",
    "KWL 890 W ET L",
    "KWL 890 W ET R",
]


def _swap16(val: int) -> int:
    return ((val & 0xFF) << 8) | ((val >> 8) & 0xFF)


def _get_alarm_date(raw: Optional[int]) -> Optional[date]:
    if raw is None:
        return None

    return datetime.date(1990, 4, 8) + datetime.timedelta(days=raw)


class MetricData:
    """Metric dataclass"""

    def __init__(self, data: MetricDict):
        self._data = data

    def __getitem__(self, name: str):
        return self._data.get(name)

    def __repr__(self):
        return f'MetricData(model="{self.model}",uuid="{self.uuid}",sw_version="{self.sw_version}",...,data={self._data})'

    def get(self, key: str, default: Optional[MetricValue] = None) -> MetricValue:
        """Get data by key with optional default value"""
        data = self._data.get(key)
        return data if data is not None else default

    def items(self):
        """Get data items"""
        return self._data.items()

    @property
    def model(self) -> Optional[str]:
        """Get the model of the unit"""
        model_index = self.get("A_CYC_MACHINE_MODEL")
        if isinstance(model_index, int) and model_index < len(DEVICE_MODEL):
            return DEVICE_MODEL[model_index]

        return None

    @property
    def sw_version(self) -> Optional[str]:
        """Get the software version of the unit"""
        try:
            return ".".join(
                str(_swap16(self.get(m)))
                for m in [f"A_CYC_APPL_SW_VERSION_{i}" for i in range(1, 10)]
            ).lstrip(".0")
        except TypeError:
            return None

    @property
    def uuid(self) -> UUID:
        """Get the UUID of the unit"""
        int_values = [self.get(m) for m in [f"A_CYC_UUID{i}" for i in range(0, 8)]]
        hex_string = "".join(f"{i:04x}" for i in int_values)
        return UUID(hex_string)

    @property
    def info(self) -> Dict[str, Union[str, UUID, None]]:
        """Get the unit info as a dictionary"""
        return {
            "model": self.model,
            "sw_version": self.sw_version,
            "uuid": self.uuid,
        }

    @property
    def profile(self) -> Profile:
        """Get the current profile of the unit"""
        if self.get("A_CYC_BOOST_TIMER", 0) > 0:
            return Profile.BOOST
        if self.get("A_CYC_FIREPLACE_TIMER", 0) > 0:
            return Profile.FIREPLACE
        if self.get("A_CYC_EXTRA_TIMER", 0) > 0:
            return Profile.EXTRA
        if self.get("A_CYC_STATE") == 1:
            return Profile.AWAY
        elif self.get("A_CYC_STATE") == 0:
            return Profile.HOME
        return Profile.NONE

    @property
    def filter_change_date(self) -> Optional[date]:
        """Get the last filter change date"""
        keys = [
            "A_CYC_FILTER_CHANGED_YEAR",
            "A_CYC_FILTER_CHANGED_MONTH",
            "A_CYC_FILTER_CHANGED_DAY",
        ]
        values = [self.get(key) for key in keys]

        if None in values:
            return None

        last_change_year = 2000 + int(values[0])
        last_change_month = int(values[1])
        last_change_day = int(values[2])

        return date(last_change_year, last_change_month, last_change_day)

    @property
    def next_filter_change_date(self) -> Optional[date]:
        """Get the next filter change date based on the interval and last change date"""
        filter_change_date = self.filter_change_date
        interval = self.get("A_CYC_FILTER_CHANGE_INTERVAL")

        if interval is None or filter_change_date is None:
            return None

        return filter_change_date + timedelta(days=int(interval))

    @property
    def supply_heating_adjust_mode(self) -> Optional[SupplyHeatingAdjustMode]:
        """Get the current supply heating adjust mode.
        Returns:
            SupplyHeatingAdjustMode: 'Supply'(0), 'Extract' (1), or 'Cooling' (2)
        """
        mode = self.get("A_CYC_SUPPLY_HEATING_ADJUST_MODE")
        try:
            return SupplyHeatingAdjustMode(mode)
        except ValueError:
            return None

    @property
    def defrost_mode(self) -> Optional[DefrostMode]:
        """Get the current supply heating adjust mode.
        Returns:
            DefrostMode: 'Bypass'(0), 'Fanstop' (1)
        """
        mode = self.get("A_CYC_DEFROST_MODE")
        try:
            return DefrostMode(mode)
        except ValueError:
            return None

    @property
    def cell_state(self) -> Optional[CellState]:
        """Get the current cell state.
        Returns:
            CellState: 'Heat recovery'(0), 'Cool recovery' (1), 'Bypass' (2), or 'Defrost' (3)
        """
        state = self.get("A_CYC_CELL_STATE")
        try:
            return CellState(state)
        except ValueError:
            return None

    def get_temperature_setting(self, profile: Profile) -> Optional[float]:
        """Get the temperature setting for the profile"""
        if profile not in PROFILE_TO_SET_TEMPERATURE_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Temperature is not gettable for profile: {str(profile)}"
            )
        return self.get(PROFILE_TO_SET_TEMPERATURE_METRIC_MAP[profile])

    def get_fan_speed(self, profile: Profile) -> Optional[int]:
        """Get the fan speed for the profile"""
        if profile not in PROFILE_TO_SET_FAN_SPEED_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Fan speed is not gettable for profile: {str(profile)}"
            )
        value = self.get(PROFILE_TO_SET_FAN_SPEED_METRIC_MAP[profile])
        return value if isinstance(value, int) else None

    def get_rh_sensor_control(self, profile: Profile) -> Optional[bool]:
        """Return true if the RH sensor control is enabled for the profile, false otherwise"""
        if profile not in PROFILE_TO_SET_RH_SENSOR_CONTROL_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"RH sensor control is not gettable for profile: {str(profile)}"
            )
        value = self.get(PROFILE_TO_SET_RH_SENSOR_CONTROL_METRIC_MAP[profile])
        return bool(value) if value is not None else None

    def get_co2_sensor_control(self, profile: Profile) -> Optional[bool]:
        """Return true if the CO2 sensor control is enabled for the profile, false otherwise"""
        if profile not in PROFILE_TO_SET_CO2_SENSOR_CONTROL_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"CO2 sensor control is not gettable for profile: {str(profile)}"
            )
        value = self.get(PROFILE_TO_SET_CO2_SENSOR_CONTROL_METRIC_MAP[profile])
        return bool(value) if value is not None else None

    def get_remaining_profile_duration(self, profile: Profile) -> Optional[int]:
        """Get the remaining duration of the profile in minutes"""
        if profile == Profile.BOOST:
            return self.get("A_CYC_BOOST_TIMER")
        if profile == Profile.FIREPLACE:
            return self.get("A_CYC_FIREPLACE_TIMER")
        if profile == Profile.EXTRA:
            return self.get("A_CYC_EXTRA_TIMER")
        return None

    @property
    def rh_sensor_manual_control_mode(self) -> Optional[bool]:
        """Return the RH sensor control mode (0 for automatic, 1 for manual)"""
        enabled = self.get(SET_RH_SENSOR_CONTROL_MODE)
        return bool(enabled) if enabled is not None else None

    @property
    def rh_sensor_limit(self) -> Optional[int]:
        """Return the RH sensor limit percentage (0-100). Only relevant if the RH sensor mode is set to 'manual'."""
        return self.get(SET_RH_SENSOR_CONTROL_LIMIT)

    @property
    def co2_sensor_limit(self) -> Optional[int]:
        """Return the CO2 sensor ppm limit (500-2000)."""
        return self.get(SET_CO2_SENSOR_CONTROL_LIMIT)

    def get_alarms(self, skip_solved=True) -> list["Alarm"]:
        """Get the alarms of the unit"""
        fault_count = self.get("A_CYC_TOTAL_FAULT_COUNT")
        if fault_count is None:
            return []

        fault_count = int(fault_count)
        alarms = []
        for i in range(1, fault_count + 1):
            suffix = "" if i == 1 else f"_{i}"
            code = self.get(f"A_CYC_FAULT_CODE{suffix}")
            if code is None:
                break

            if code == 0:
                continue

            activity = Alarm.Activity(self.get(f"A_CYC_FAULT_ACTIVITY{suffix}"))

            if skip_solved and activity == 2:
                continue

            first_date = _get_alarm_date(self.get(f"A_CYC_FAULT_FIRST_DATE{suffix}"))
            last_date = _get_alarm_date(self.get(f"A_CYC_FAULT_LAST_DATE{suffix}"))

            severity = Alarm.Severity(self.get(f"A_CYC_FAULT_SEVERITY{suffix}"))

            alarms.append(
                Alarm(
                    nr=i,
                    code=int(code),
                    severity=severity,
                    first_date=first_date,
                    last_date=last_date,
                    count=self.get(f"A_CYC_FAULT_COUNT{suffix}", 0),
                    activity=Alarm.Activity(activity),
                )
            )

        return alarms


@dataclass
class Alarm:
    """Alarm dataclass"""

    nr: int
    code: int
    severity: "Severity"
    first_date: Optional[datetime.date]
    last_date: Optional[datetime.date]
    count: int
    activity: "Activity"

    class Severity(Enum):
        """Alarm severity"""

        UNKNOWN = -1
        MILD = 0
        SEVERE = 1

    class Activity(Enum):
        """Alarm status"""

        UNKNOWN = -1
        PASSIVE = 0
        ACTIVE = 1
        SOLVED = 2

    @property
    def message(self) -> str:
        """Get the alarm message"""
        try:
            return ALARM_MESSAGES[self.code]["text"]
        except IndexError:
            return "Unknown"

    def __repr__(self):
        return (
            f"Alarm(nr={self.nr}, code={self.code}, severity={self.severity}, first_date={self.first_date}, "
            f"last_date={self.last_date}, count={self.count}, activity={self.activity}, "
            f"message='{self.message}')"
        )


class Vallox(Client):
    async def fetch_metric_data(self) -> MetricData:
        """Fetch the metric data from the unit"""
        return MetricData(await self.fetch_metrics())

    async def set_profile(
        self, profile: Profile, duration: Optional[int] = None
    ) -> None:
        """Set the profile of the unit

        :params:
          :profile: One of Profile.* values
          :duration: timeout in minutes for the FIREPLACE, BOOST and EXTRA profiles (None means default configured setting. 65535 means no time out)
        """
        set_duration = None
        if duration is not None and 0 <= int(duration) <= 65535:
            set_duration = int(duration)

        metric_data_cache = None

        async def lazy_fetch_metric_value(metric: str) -> int:
            nonlocal metric_data_cache
            if not metric_data_cache:
                metric_data_cache = await self.fetch_metric_data()

            value = metric_data_cache.get(metric)
            if not isinstance(value, int):
                raise ValloxInvalidInputException(f"Invalid value for metric {metric}")
            return value

        if profile == Profile.HOME:
            logger.info("Setting unit to HOME profile")
            await self.set_values(
                {
                    "A_CYC_STATE": 0,
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == Profile.AWAY:
            logger.info("Setting unit to AWAY profile")
            await self.set_values(
                {
                    "A_CYC_STATE": 1,
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == Profile.FIREPLACE:
            dur = set_duration or await lazy_fetch_metric_value("A_CYC_FIREPLACE_TIME")
            logger.info(f"Setting unit to FIREPLACE profile for {dur} minutes")
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": dur,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == Profile.BOOST:
            dur = set_duration or await lazy_fetch_metric_value("A_CYC_BOOST_TIME")
            logger.info(f"Setting unit to BOOST profile for {dur} minutes")
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": dur,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == Profile.EXTRA:
            dur = set_duration or await lazy_fetch_metric_value("A_CYC_EXTRA_TIME")
            logger.info(f"Setting unit to EXTRA profile for {dur} minutes")
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": dur,
                }
            )

    async def set_temperature(self, profile: Profile, temperature: float) -> None:
        """Set the temperature for the profile"""
        if profile not in PROFILE_TO_SET_TEMPERATURE_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Temperature is not settable for profile: {str(profile)}"
            )
        setting = PROFILE_TO_SET_TEMPERATURE_METRIC_MAP[profile]

        await self.set_values({setting: temperature})

    async def set_fan_speed(self, profile: Profile, percent: int) -> None:
        """Set the fan speed for the profile"""
        if percent < 0 or percent > 100:
            raise ValloxInvalidInputException("Fan speed must be between 0 and 100")

        if profile not in PROFILE_TO_SET_FAN_SPEED_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Fan speed is not settable for profile: {profile}"
            )
        setting = PROFILE_TO_SET_FAN_SPEED_METRIC_MAP[profile]

        await self.set_values({setting: percent})

    async def set_rh_sensor_control(self, profile: Profile, enable: bool) -> None:
        """Enable/disable the RH sensor control of the profile"""
        if profile not in PROFILE_TO_SET_RH_SENSOR_CONTROL_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"RH sensor control is not settable for profile: {profile}"
            )
        setting = PROFILE_TO_SET_RH_SENSOR_CONTROL_METRIC_MAP[profile]

        await self.set_values({setting: enable})

    async def set_co2_sensor_control(self, profile: Profile, enable: bool) -> None:
        """Enable/disable the CO2 sensor control of the profile"""
        if profile not in PROFILE_TO_SET_CO2_SENSOR_CONTROL_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"CO2 sensor control is not settable for profile: {profile}"
            )
        setting = PROFILE_TO_SET_CO2_SENSOR_CONTROL_METRIC_MAP[profile]

        await self.set_values({setting: enable})

    async def set_rh_sensor_manual_control_mode(self, enable: bool) -> None:
        """Set the RH sensor control mode (0 for automatic, 1 for manual)"""
        if enable not in (0, 1):
            raise ValloxInvalidInputException(
                "RH sensor control mode must be 0 (automatic) or 1 (manual)"
            )
        await self.set_values({SET_RH_SENSOR_CONTROL_MODE: enable})

    async def set_rh_sensor_limit(self, percent: int) -> None:
        """Set the RH sensor limit (0-100). Only relevant if the RH sensor mode is set to 'manual'."""
        if percent < 0 or percent > 100:
            raise ValloxInvalidInputException(
                "RH sensor limit must be between 0 and 100"
            )
        await self.set_values({SET_RH_SENSOR_CONTROL_LIMIT: percent})

    async def set_co2_sensor_limit(self, ppm: int) -> None:
        """Set the CO2 sensor ppm limit (500-2000)."""
        if ppm < 500 or ppm > 2000:
            raise ValloxInvalidInputException(
                "CO2 sensor limit must be between 500 and 2000"
            )
        await self.set_values({SET_CO2_SENSOR_CONTROL_LIMIT: ppm})

    async def set_supply_heating_adjust_mode(
        self, mode: SupplyHeatingAdjustMode
    ) -> None:
        """Set the supply heating adjust mode.
        Args:
            mode: 0 (supply), 1 (extract), or 2 (cooling)
        Raises:
            ValloxInvalidInputException: If mode is not 0, 1, or 2
        """
        if not isinstance(mode, SupplyHeatingAdjustMode):
            raise ValloxInvalidInputException(
                "Mode must be a SupplyHeatingAdjustMode enum value (0, 1, or 2)"
            )
        await self.set_values({"A_CYC_SUPPLY_HEATING_ADJUST_MODE": mode.value})

    async def set_defrost_mode(self, mode: DefrostMode) -> None:
        """Set the defrost mode.
        Args:
            mode: 0 (bypass), 1 (fanstop)
        Raises:
            ValloxInvalidInputException: If mode is not 0, 1, or 2
        """
        if not isinstance(mode, DefrostMode):
            raise ValloxInvalidInputException(
                "Mode must be a DefrostMode enum value (0 or 1)"
            )
        await self.set_values({"A_CYC_DEFROST_MODE": mode.value})

    async def set_filter_change_date(self, _date: date) -> None:
        """Set the next filter change date to today"""
        assert isinstance(_date, date)

        await self.set_values(
            {
                "A_CYC_FILTER_CHANGED_DAY": _date.day,
                "A_CYC_FILTER_CHANGED_MONTH": _date.month,
                "A_CYC_FILTER_CHANGED_YEAR": _date.year - 2000,
            }
        )

    async def resolve_alarm(self, alarm: Alarm) -> None:
        """Resolve an alarm"""

        suffix = "" if alarm.nr == 1 else f"_{alarm.nr}"
        await self.set_values(
            {f"A_CYC_FAULT_ACTIVITY{suffix}": Alarm.Activity.SOLVED.value}
        )
