import asynctest

from vallox_websocket_api import PROFILE, Vallox


class TestValloxSetProfile(asynctest.TestCase):
    def setUp(self):
        self.client = Vallox("127.0.0.1")

        self.client.set_values = asynctest.CoroutineMock()

    async def checkSetProfile(self, profile, set_values_dict):
        await self.client.set_profile(profile)

        self.client.set_values.assert_called_once_with(set_values_dict)

    async def testSetProfileHome(self):
        await self.checkSetProfile(
            PROFILE.HOME,
            {
                "A_CYC_STATE": "0",
                "A_CYC_BOOST_TIMER": "0",
                "A_CYC_FIREPLACE_TIMER": "0",
                "A_CYC_EXTRA_TIMER": "0",
            },
        )

    async def testSetProfileAway(self):
        await self.checkSetProfile(
            PROFILE.AWAY,
            {
                "A_CYC_STATE": "1",
                "A_CYC_BOOST_TIMER": "0",
                "A_CYC_FIREPLACE_TIMER": "0",
                "A_CYC_EXTRA_TIMER": "0",
            },
        )

    async def testSetProfileBoost(self):
        self.client.fetch_metric = asynctest.CoroutineMock(return_value=30)

        await self.checkSetProfile(
            PROFILE.BOOST,
            {
                "A_CYC_BOOST_TIMER": "30",
                "A_CYC_FIREPLACE_TIMER": "0",
                "A_CYC_EXTRA_TIMER": "0",
            },
        )

        self.client.fetch_metric.assert_called_once_with("A_CYC_BOOST_TIME")

    async def testSetProfileFireplace(self):
        self.client.fetch_metric = asynctest.CoroutineMock(return_value=30)

        await self.checkSetProfile(
            PROFILE.FIREPLACE,
            {
                "A_CYC_BOOST_TIMER": "0",
                "A_CYC_FIREPLACE_TIMER": "30",
                "A_CYC_EXTRA_TIMER": "0",
            },
        )

        self.client.fetch_metric.assert_called_once_with("A_CYC_FIREPLACE_TIME")

    async def testSetProfileExtra(self):
        self.client.fetch_metric = asynctest.CoroutineMock(return_value=30)

        await self.checkSetProfile(
            PROFILE.EXTRA,
            {
                "A_CYC_BOOST_TIMER": "0",
                "A_CYC_FIREPLACE_TIMER": "0",
                "A_CYC_EXTRA_TIMER": "30",
            },
        )

        self.client.fetch_metric.assert_called_once_with("A_CYC_EXTRA_TIME")


class TestValloxGetProfile(asynctest.TestCase):
    def setUp(self):
        self.client = Vallox("127.0.0.1")

    async def checkGetProfile(self, fetch_metrics_result, expected_profile):
        self.client.fetch_metrics = asynctest.CoroutineMock(
            return_value=fetch_metrics_result
        )

        self.assertEqual(await self.client.get_profile(), expected_profile)

        self.client.fetch_metrics.assert_called_once_with(
            [
                "A_CYC_STATE",
                "A_CYC_BOOST_TIMER",
                "A_CYC_FIREPLACE_TIMER",
                "A_CYC_EXTRA_TIMER",
            ]
        )

    async def testGetProfileHome(self):
        await self.checkGetProfile(
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            PROFILE.HOME,
        )

    async def testGetProfileAway(self):
        await self.checkGetProfile(
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            PROFILE.AWAY,
        )

    async def testGetProfileBoost(self):
        await self.checkGetProfile(
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 30,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            PROFILE.BOOST,
        )

        await self.checkGetProfile(
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 30,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 0,
            },
            PROFILE.BOOST,
        )

    async def testGetProfileFireplace(self):
        await self.checkGetProfile(
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 30,
                "A_CYC_EXTRA_TIMER": 0,
            },
            PROFILE.FIREPLACE,
        )

        await self.checkGetProfile(
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 30,
                "A_CYC_EXTRA_TIMER": 0,
            },
            PROFILE.FIREPLACE,
        )

    async def testGetProfileExtra(self):
        await self.checkGetProfile(
            {
                "A_CYC_STATE": 0,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 30,
            },
            PROFILE.EXTRA,
        )

        await self.checkGetProfile(
            {
                "A_CYC_STATE": 1,
                "A_CYC_BOOST_TIMER": 0,
                "A_CYC_FIREPLACE_TIMER": 0,
                "A_CYC_EXTRA_TIMER": 30,
            },
            PROFILE.EXTRA,
        )
