from dataclasses import dataclass
import datetime
from datetime import date, timedelta
from enum import Enum, IntEnum
import logging
from typing import Dict, Optional, Union
from uuid import UUID

from vallox_websocket_api.exceptions import ValloxInvalidInputException

from .client import Client, MetricDict
from .data.constants import ALARM_MESSAGES

logger = logging.getLogger("vallox").getChild(__name__)


class PROFILE(IntEnum):
    NONE = 0
    HOME = 1
    AWAY = 2
    BOOST = 3
    FIREPLACE = 4
    EXTRA = 5


PROFILE_TO_SET_TEMPERATURE_METRIC_MAP = {
    PROFILE.HOME: "A_CYC_HOME_AIR_TEMP_TARGET",
    PROFILE.AWAY: "A_CYC_AWAY_AIR_TEMP_TARGET",
    PROFILE.BOOST: "A_CYC_BOOST_AIR_TEMP_TARGET",
}

PROFILE_TO_SET_FAN_SPEED_METRIC_MAP = {
    PROFILE.HOME: "A_CYC_HOME_SPEED_SETTING",
    PROFILE.AWAY: "A_CYC_AWAY_SPEED_SETTING",
    PROFILE.BOOST: "A_CYC_BOOST_SPEED_SETTING",
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

SW_VERSION_METRICS = [f"A_CYC_APPL_SW_VERSION_{i}" for i in range(1, 10)]
UUID_METRICS = [f"A_CYC_UUID{i}" for i in range(0, 8)]
MODEL_METRIC = "A_CYC_MACHINE_MODEL"


def get_model(data: MetricDict) -> str:
    model_index = data[MODEL_METRIC]
    if isinstance(model_index, int) and model_index < len(DEVICE_MODEL):
        return DEVICE_MODEL[model_index] or "Unknown"

    return "Unknown"


def get_sw_version(data: MetricDict) -> str:
    try:
        return ".".join(str(swap16(data[m])) for m in SW_VERSION_METRICS).lstrip(".0")
    except TypeError:
        return "Unknown"


def get_uuid(data: MetricDict) -> UUID:
    int_values = [data[m] for m in UUID_METRICS]
    hex_string = "".join(f"{i:04x}" for i in int_values)
    return UUID(hex_string)


def get_next_filter_change_date(data: MetricDict) -> Optional[date]:
    if (
        data.get("A_CYC_FILTER_CHANGED_YEAR") is None
        or data.get("A_CYC_FILTER_CHANGED_MONTH") is None
        or data.get("A_CYC_FILTER_CHANGED_DAY") is None
        or data.get("A_CYC_FILTER_CHANGE_INTERVAL") is None
    ):
        return None

    last_change_year = 2000 + int(data["A_CYC_FILTER_CHANGED_YEAR"])
    last_change_month = int(data["A_CYC_FILTER_CHANGED_MONTH"])
    last_change_day = int(data["A_CYC_FILTER_CHANGED_DAY"])
    filter_change_interval_days = int(data["A_CYC_FILTER_CHANGE_INTERVAL"])

    last_change_date = date(last_change_year, last_change_month, last_change_day)
    filter_change_delta = timedelta(days=filter_change_interval_days)

    return last_change_date + filter_change_delta


def swap16(val: int) -> int:
    return ((val & 0xFF) << 8) | ((val >> 8) & 0xFF)


def _get_alarm_date(raw: Optional[int]) -> Optional[date]:
    if raw is None:
        return None

    return datetime.date(1990, 4, 8) + datetime.timedelta(days=raw)


class MetricData:
    """Metric dataclass"""

    def __init__(self, data: MetricDict):
        self.data = data

    def __getattr__(self, name: str):
        return self.data.get(name)

    def __getitem__(self, name: str):
        return self.data.get(name)

    def __repr__(self):
        return f'MetricData(model="{self.model}",uuid="{self.uuid}",sw_version="{self.sw_version}",...,data={self.data})'

    def items(self):
        return self.data.items()

    @property
    def model(self) -> str:
        return get_model(self.data)

    @property
    def sw_version(self) -> str:
        return get_sw_version(self.data)

    @property
    def uuid(self) -> UUID:
        return get_uuid(self.data)

    @property
    def profile(self) -> PROFILE:
        if (
            self.data["A_CYC_BOOST_TIMER"] is not None
            and self.data["A_CYC_BOOST_TIMER"] > 0
        ):
            return PROFILE.BOOST
        if (
            self.data["A_CYC_FIREPLACE_TIMER"] is not None
            and self.data["A_CYC_FIREPLACE_TIMER"] > 0
        ):
            return PROFILE.FIREPLACE
        if (
            self.data["A_CYC_EXTRA_TIMER"] is not None
            and self.data["A_CYC_EXTRA_TIMER"] > 0
        ):
            return PROFILE.EXTRA
        if self.data["A_CYC_STATE"] == 1:
            return PROFILE.AWAY
        elif self.data["A_CYC_STATE"] == 0:
            return PROFILE.HOME
        return PROFILE.NONE

    @property
    def next_filter_change_date(self) -> Optional[date]:
        return get_next_filter_change_date(self.data)

    def get_temperature_setting(self, profile: PROFILE) -> Optional[float]:
        if profile not in PROFILE_TO_SET_TEMPERATURE_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Temperature is not gettable for profile: {profile}"
            )
        return self.data.get(PROFILE_TO_SET_TEMPERATURE_METRIC_MAP[profile])

    def get_fan_speed(self, profile: PROFILE) -> Optional[int]:
        if profile not in PROFILE_TO_SET_FAN_SPEED_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Fan speed is not gettable for profile: {profile}"
            )
        return self.data.get(PROFILE_TO_SET_FAN_SPEED_METRIC_MAP[profile])

    def get_alarms(self, skip_solved=True) -> list["Alarm"]:
        fault_count = self.data.get("A_CYC_TOTAL_FAULT_COUNT")
        if fault_count is None:
            return []

        fault_count = int(fault_count)
        alarms = []
        for i in range(1, fault_count + 1):
            suffix = "" if i == 1 else f"_{i}"
            code = self.data.get(f"A_CYC_FAULT_CODE{suffix}")
            if code is None:
                break

            if code == 0:
                continue

            activity = Alarm.Activity(self.data.get(f"A_CYC_FAULT_ACTIVITY{suffix}"))

            if skip_solved and activity == 2:
                continue

            first_date = _get_alarm_date(
                self.data.get(f"A_CYC_FAULT_FIRST_DATE{suffix}")
            )
            last_date = _get_alarm_date(self.data.get(f"A_CYC_FAULT_LAST_DATE{suffix}"))

            severity = Alarm.Severity(self.data.get(f"A_CYC_FAULT_SEVERITY{suffix}"))

            alarms.append(
                Alarm(
                    nr=i,
                    code=int(code),
                    severity=severity,
                    first_date=first_date,
                    last_date=last_date,
                    count=self.data.get(f"A_CYC_FAULT_COUNT{suffix}", None),
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

    async def get_profile(self) -> PROFILE:
        """Returns the profile of the fan

        :returns: One of PROFILE.* values or PROFILE.NONE if unknown
        """
        metrics = await self.fetch_metric_data()
        return metrics.profile

    async def set_profile(
        self, profile: PROFILE, duration: Optional[int] = None
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

        if profile == PROFILE.HOME:
            logger.info("Setting unit to HOME profile")
            await self.set_values(
                {
                    "A_CYC_STATE": 0,
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == PROFILE.AWAY:
            logger.info("Setting unit to AWAY profile")
            await self.set_values(
                {
                    "A_CYC_STATE": 1,
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == PROFILE.FIREPLACE:
            dur = set_duration or await self.fetch_metric("A_CYC_FIREPLACE_TIME")
            logger.info(f"Setting unit to FIREPLACE profile for {dur} minutes")
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": dur,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == PROFILE.BOOST:
            dur = set_duration or await self.fetch_metric("A_CYC_BOOST_TIME")
            logger.info(f"Setting unit to BOOST profile for {dur} minutes")
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": dur,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": 0,
                }
            )
        elif profile == PROFILE.EXTRA:
            dur = set_duration or await self.fetch_metric("A_CYC_EXTRA_TIME")
            logger.info(f"Setting unit to EXTRA profile for {dur} minutes")
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": 0,
                    "A_CYC_FIREPLACE_TIMER": 0,
                    "A_CYC_EXTRA_TIMER": dur,
                }
            )

    async def get_info(self) -> Dict[str, Union[str, UUID]]:
        data = await self.fetch_metric_data()
        return {
            "model": data.model,
            "sw_version": data.sw_version,
            "uuid": data.uuid,
            "ip_address": self.ip_address,
        }

    async def get_temperature(self, profile: PROFILE) -> Optional[float]:
        data = await self.fetch_metric_data()
        return data.get_temperature_setting(profile)

    async def set_temperature(self, profile: PROFILE, temperature: float) -> None:
        if profile not in PROFILE_TO_SET_TEMPERATURE_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Temperature is not settable for profile: {profile}"
            )
        setting = PROFILE_TO_SET_TEMPERATURE_METRIC_MAP[profile]

        await self.set_values({setting: temperature})

    async def get_fan_speed(self, profile: PROFILE) -> Optional[int]:
        data = await self.fetch_metric_data()
        return data.get_fan_speed(profile)

    async def set_fan_speed(self, profile: PROFILE, percent: int) -> None:
        if percent < 0 or percent > 100:
            raise ValloxInvalidInputException("Fan speed must be between 0 and 100")

        if profile not in PROFILE_TO_SET_FAN_SPEED_METRIC_MAP:
            raise ValloxInvalidInputException(
                f"Fan speed is not settable for profile: {profile}"
            )

        await self.set_values({PROFILE_TO_SET_FAN_SPEED_METRIC_MAP[profile]: percent})

    async def get_next_filter_change_date(self) -> Optional[date]:
        """Returns the date for the next filter change.

        :returns: next filter change date, or None if no date is available
        """
        data = await self.fetch_metric_data()
        return data.next_filter_change_date

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
