from datetime import date
import asynctest

from vallox_websocket_api import PROFILE, Vallox

class TestValloxNextFilterChange(asynctest.TestCase):
    def setUp(self):
        self.client = Vallox("127.0.0.1")

    async def checkNextFilterChangeDate(self, fetch_metrics_result, expected_date):
        self.client.fetch_metrics = asynctest.CoroutineMock(
            return_value=fetch_metrics_result
        )

        self.assertEqual(await self.client.get_next_filter_change_date(), expected_date)

        self.client.fetch_metrics.assert_called_once_with(
            [
                "A_CYC_FILTER_CHANGED_YEAR",
                "A_CYC_FILTER_CHANGED_MONTH",
                "A_CYC_FILTER_CHANGED_DAY",
                "A_CYC_FILTER_CHANGE_INTERVAL",
            ]
        )

    async def testNextFilterChangeInTheFuture(self):
        await self.checkNextFilterChangeDate(
            {
                "A_CYC_FILTER_CHANGED_YEAR": 22,
                "A_CYC_FILTER_CHANGED_MONTH": 1,
                "A_CYC_FILTER_CHANGED_DAY": 30,
                "A_CYC_FILTER_CHANGE_INTERVAL": 180,
            },
            date(2022, 7, 29),
        )

    async def testNextFilterChangeTomorrow(self):
        await self.checkNextFilterChangeDate(
            {
                "A_CYC_FILTER_CHANGED_YEAR": 21,
                "A_CYC_FILTER_CHANGED_MONTH": 10,
                "A_CYC_FILTER_CHANGED_DAY": 19,
                "A_CYC_FILTER_CHANGE_INTERVAL": 120,
            },
            date(2022, 2, 16),
        )

    async def testNextFilterChangeToday(self):
        await self.checkNextFilterChangeDate(
            {
                "A_CYC_FILTER_CHANGED_YEAR": 21,
                "A_CYC_FILTER_CHANGED_MONTH": 10,
                "A_CYC_FILTER_CHANGED_DAY": 18,
                "A_CYC_FILTER_CHANGE_INTERVAL": 120,
            },
            date(2022, 2, 15),
        )

    async def testNextFilterChangeYesterday(self):
        await self.checkNextFilterChangeDate(
            {
                "A_CYC_FILTER_CHANGED_YEAR": 21,
                "A_CYC_FILTER_CHANGED_MONTH": 10,
                "A_CYC_FILTER_CHANGED_DAY": 17,
                "A_CYC_FILTER_CHANGE_INTERVAL": 120,
            },
            date(2022, 2, 14),
        )

    async def testNoNextFilterChangeAvailable(self):
        await self.checkNextFilterChangeDate(
            {
                "A_CYC_FILTER_CHANGE_INTERVAL": 120,
            },
            None,
        )
