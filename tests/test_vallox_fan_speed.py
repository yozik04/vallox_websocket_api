import asynctest

from vallox_websocket_api import PROFILE, Vallox
from vallox_websocket_api.exceptions import ValloxInvalidInputException


class TestValloxSetFanSpeed(asynctest.TestCase):
    def setUp(self):
        self.client = Vallox("127.0.0.1")

        self.client.set_values = asynctest.CoroutineMock()

    async def checkSetFanSpeed(self, profile, percentage, set_values_dict):
        await self.client.set_fan_speed(profile, percentage)

        self.client.set_values.assert_called_once_with(set_values_dict)

    async def testSetFanSpeedHome(self):
        await self.checkSetFanSpeed(PROFILE.HOME, 19, {"A_CYC_HOME_SPEED_SETTING": 19})

    async def testSetFanSpeedAway(self):
        await self.checkSetFanSpeed(PROFILE.AWAY, 0, {"A_CYC_AWAY_SPEED_SETTING": 0})

    async def testSetFanSpeedBoost(self):
        await self.checkSetFanSpeed(
            PROFILE.BOOST, 100, {"A_CYC_BOOST_SPEED_SETTING": 100}
        )

    async def testSetFanSpeedWrong(self):
        with self.assertRaises(ValloxInvalidInputException):
            await self.checkSetFanSpeed(PROFILE.FIREPLACE, 19, {"WRONG": 20})

    async def testSetFanSpeedHomeInvalidPercentage(self):
        with self.assertRaises(ValloxInvalidInputException):
            await self.checkSetFanSpeed(
                PROFILE.HOME, -1, {"A_CYC_HOME_SPEED_SETTING": -1}
            )

        with self.assertRaises(ValloxInvalidInputException):
            await self.checkSetFanSpeed(
                PROFILE.HOME, 101, {"A_CYC_HOME_SPEED_SETTING": 101}
            )


class TestValloxGetFanSpeed(asynctest.TestCase):
    def setUp(self):
        self.client = Vallox("127.0.0.1")

    async def checkGetFanSpeedForProfile(
        self, fetch_metrics_result, profile, expected_percentage
    ):
        self.client.fetch_metrics = asynctest.CoroutineMock(
            return_value=fetch_metrics_result
        )

        self.assertEqual(await self.client.get_fan_speed(profile), expected_percentage)

        self.client.fetch_metrics.assert_called_once_with(
            list(fetch_metrics_result.keys())
        )

    async def testGetFanSpeedForProfileHome(self):
        await self.checkGetFanSpeedForProfile(
            {"A_CYC_HOME_SPEED_SETTING": 19}, PROFILE.HOME, 19
        )
