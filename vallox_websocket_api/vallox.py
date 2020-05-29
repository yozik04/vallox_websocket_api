import logging
from enum import IntEnum

from .client import Client

logger = logging.getLogger('vallox').getChild(__name__)


class PROFILE(IntEnum):
    NONE = 0
    HOME = 1
    AWAY = 2
    BOOST = 3
    FIREPLACE = 4
    EXTRA = 5


MAP = {
    "temperature": {
        PROFILE.HOME: "A_CYC_HOME_AIR_TEMP_TARGET",
        PROFILE.AWAY: "A_CYC_AWAY_AIR_TEMP_TARGET",
        PROFILE.BOOST: "A_CYC_BOOST_AIR_TEMP_TARGET",
    }
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


def swap16(val):
    return ((val & 0xFF) << 8) | ((val >> 8) & 0xFF)


class Vallox(Client):
    async def get_profile(self):
        """Returns the profile of the fan

        :returns: One of PROFILE.* values or PROFILE.NONE if unknown
        """
        s = await self.fetch_metrics(
            [
                "A_CYC_STATE",
                "A_CYC_BOOST_TIMER",
                "A_CYC_FIREPLACE_TIMER",
                "A_CYC_EXTRA_TIMER",
            ]
        )

        if s["A_CYC_BOOST_TIMER"] > 0:
            return PROFILE.BOOST
        if s["A_CYC_FIREPLACE_TIMER"] > 0:
            return PROFILE.FIREPLACE
        if s["A_CYC_EXTRA_TIMER"] > 0:
            return PROFILE.EXTRA
        if s["A_CYC_STATE"] == 1:
            return PROFILE.AWAY
        elif s["A_CYC_STATE"] == 0:
            return PROFILE.HOME
        return PROFILE.NONE

    async def set_profile(self, profile, duration=None):
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
                    "A_CYC_STATE": "0",
                    "A_CYC_BOOST_TIMER": "0",
                    "A_CYC_FIREPLACE_TIMER": "0",
                    "A_CYC_EXTRA_TIMER": "0",
                }
            )
        elif profile == PROFILE.AWAY:
            logger.info("Setting unit to AWAY profile")
            await self.set_values(
                {
                    "A_CYC_STATE": "1",
                    "A_CYC_BOOST_TIMER": "0",
                    "A_CYC_FIREPLACE_TIMER": "0",
                    "A_CYC_EXTRA_TIMER": "0",
                }
            )
        elif profile == PROFILE.FIREPLACE:
            if set_duration is not None:
                dur = str(set_duration)
            else:
                dur = str(await self.fetch_metric("A_CYC_FIREPLACE_TIME"))
            logger.info("Setting unit to FIREPLACE profile for %s minutes", dur)
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": "0",
                    "A_CYC_FIREPLACE_TIMER": dur,
                    "A_CYC_EXTRA_TIMER": "0",
                }
            )
        elif profile == PROFILE.BOOST:
            if set_duration is not None:
                dur = str(set_duration)
            else:
                dur = str(await self.fetch_metric("A_CYC_BOOST_TIME"))
            logger.info("Setting unit to BOOST profile for %s minutes", dur)
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": dur,
                    "A_CYC_FIREPLACE_TIMER": "0",
                    "A_CYC_EXTRA_TIMER": "0",
                }
            )
        elif profile == PROFILE.EXTRA:
            if set_duration is not None:
                dur = str(set_duration)
            else:
                dur = str(await self.fetch_metric("A_CYC_EXTRA_TIME"))
                logger.info("Setting unit to EXTRA profile for %s minutes", dur)
            await self.set_values(
                {
                    "A_CYC_BOOST_TIMER": "0",
                    "A_CYC_FIREPLACE_TIMER": "0",
                    "A_CYC_EXTRA_TIMER": dur,
                }
            )

    async def get_info(self):
        SW_VERSION_METRICS = ["A_CYC_APPL_SW_VERSION_%d" % i for i in range(1, 10)]

        data = await self.fetch_metrics(SW_VERSION_METRICS + ["A_CYC_MACHINE_MODEL"])

        model = "Unknown"
        try:
            model = DEVICE_MODEL[data["A_CYC_MACHINE_MODEL"]]
        except IndexError:
            pass

        version = ".".join(str(swap16(data[m])) for m in SW_VERSION_METRICS).lstrip(
            ".0"
        )

        return {"model": model, "sw_version": version}

    async def get_temperature(self, profile):
        try:
            setting = MAP["temperature"][profile]
        except KeyError:
            raise AttributeError(
                "Temperature is not gettable for this profile: " + str(profile)
            )

        return await self.fetch_metric(setting)

    async def set_temperature(self, profile, temperature):
        try:
            setting = MAP["temperature"][profile]
        except KeyError:
            raise AttributeError(
                "Temperature is not settable for this profile: " + str(profile)
            )

        await self.set_values({setting: temperature})
