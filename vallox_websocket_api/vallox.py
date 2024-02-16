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
        data = self._data.get(key)
        return data if data is not None else default

    def items(self):
        return self._data.items()

    @property
    def model(self) -> Optional[str]:
        model_index = self.get("A_CYC_MACHINE_MODEL")
        if isinstance(model_index, int) and model_index < len(DEVICE_MODEL):
            return DEVICE_MODEL[model_index]

        return None

    @property
    def sw_version(self) -> Optional[str]:
        try:
            return ".".join(
                str(_swap16(self.get(m)))
                for m in [f"A_CYC_APPL_SW_VERSION_{i}" for i in range(1, 10)]
            ).lstrip(".0")
        except TypeError:
            return None

    @property
    def uuid(self) -> UUID:
        int_values = [self.get(m) for m in [f"A_CYC_UUID{i}" for i in range(0, 8)]]
        hex_string = "".join(f"{i:04x}" for i in int_values)
        return UUID(hex_string)

    @property
    def info(self) -> Dict[str, Union[str, UUID]]:
        return {
            "model": self.model,
            "sw_version": self.sw_version,
            "uuid": self.uuid,
        }

    @property
    def profile(self) -> Profile:
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
    def next_filter_change_date(self) -> Optional[date]:
        keys = [
            "A_CYC_FILTER_CHANGED_YEAR",
            "A_CYC_FILTER_CHANGED_MONTH",
            "A_CYC_FILTER_CHANGED_DAY",
            "A_CYC_FILTER_CHANGE_INTERVAL",
        ]
        values = [self.get(key) for key in keys]

        if None in values:
            return None

        last_change_year = 2000 + int(values[0])
        last_change_month = int(values[1])
        last_change_day = int(values[2])
        filter_change_interval_days = int(values[3])

        return date(last_change_year, last_change_month, last_change_day) + timedelta(
            days=filter_change_interval_days
        )

    def get_temperature_setting(self, profile: Profile) -> Optional[float]:
        if profile not in PROFILE_TO_SET_TEMPERATURE_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Temperature is not gettable for profile: {profile}"
            )
        return self.get(PROFILE_TO_SET_TEMPERATURE_METRIC_MAP[profile])

    def get_fan_speed(self, profile: Profile) -> Optional[int]:
        if profile not in PROFILE_TO_SET_FAN_SPEED_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Fan speed is not gettable for profile: {profile}"
            )
        return self.get(PROFILE_TO_SET_FAN_SPEED_METRIC_MAP[profile])

    def get_alarms(self, skip_solved=True) -> list["Alarm"]:
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
        return MetricData(await self.fetch_metrics())

    async def set_profile(
        self, profile: Profile, duration: Optional[int] = None
    ) -> None:
        set_duration = None
        if duration is not None and 0 <= int(duration) <= 65535:
            set_duration = int(duration)

        """Set the profile of the unit

        :params:
          :profile: One of PROFILE.* values
          :duration: timeout in minutes for the FIREPLACE, BOOST and EXTRA profiles
        """

        # duration: None means default configured setting. 65535 means no time out

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
        if profile not in PROFILE_TO_SET_TEMPERATURE_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Temperature is not settable for profile: {profile}"
            )
        setting = PROFILE_TO_SET_TEMPERATURE_METRIC_MAP[profile]

        await self.set_values({setting: temperature})

    async def set_fan_speed(self, profile: Profile, percent: int) -> None:
        if percent < 0 or percent > 100:
            raise ValloxInvalidInputException("Fan speed must be between 0 and 100")

        if profile not in PROFILE_TO_SET_FAN_SPEED_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Fan speed is not settable for profile: {profile}"
            )

        await self.set_values({PROFILE_TO_SET_FAN_SPEED_METRIC_MAP[profile]: percent})

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
