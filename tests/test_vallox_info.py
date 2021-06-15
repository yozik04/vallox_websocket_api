import asynctest

from vallox_websocket_api import Vallox


class TestValloxInfo(asynctest.TestCase):
    def setUp(self):
        self.client = Vallox("127.0.0.1")

    async def testGetInfo(self):
        self.client.fetch_metrics = asynctest.CoroutineMock(
            return_value={
                'A_CYC_APPL_SW_VERSION_1': 0,
                'A_CYC_APPL_SW_VERSION_2': 0,
                'A_CYC_APPL_SW_VERSION_3': 0,
                'A_CYC_APPL_SW_VERSION_4': 0,
                'A_CYC_APPL_SW_VERSION_5': 0,
                'A_CYC_APPL_SW_VERSION_6': 0,
                'A_CYC_APPL_SW_VERSION_7': 512,
                'A_CYC_APPL_SW_VERSION_8': 0,
                'A_CYC_APPL_SW_VERSION_9': 512,
                'A_CYC_MACHINE_MODEL': 3,
                'A_CYC_UUID0': 25432,
                'A_CYC_UUID1': 25432,
                'A_CYC_UUID2': 25432,
                'A_CYC_UUID3': 25432,
                'A_CYC_UUID4': 25432,
                'A_CYC_UUID5': 25432,
                'A_CYC_UUID6': 25432,
                'A_CYC_UUID7': 25432,
            }
        )

        info = await self.client.get_info()

        self.assertEquals("Vallox 145 MV", info["model"])
        self.assertEquals("2.0.2", info["sw_version"])
        self.assertEquals("63586358-6358-6358-6358-635863586358", str(info["uuid"]))

        self.client.fetch_metrics.assert_called()
