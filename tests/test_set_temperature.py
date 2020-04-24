import struct

import asynctest

from tests.decorators import with_client


class TestClient(asynctest.TestCase):
    # [4, 249, 20508, 29215, 49976]
    @with_client
    async def testSetHomeAirTempTargetRawInt(self, client, ws):
        ws.recv.return_value = b""

        await client.set_values({"A_CYC_HOME_AIR_TEMP_TARGET": 19})

        ws.send.assert_called_once_with(
            struct.pack("HHHHH", 4, 249, 20508, 29215, 49976)
        )

    @with_client
    async def testSetHomeAirTempTargetRawFloat(self, client, ws):
        ws.recv.return_value = b""

        await client.set_values({"A_CYC_HOME_AIR_TEMP_TARGET": 19.0})

        ws.send.assert_called_once_with(
            struct.pack("HHHHH", 4, 249, 20508, 29215, 49976)
        )

    @with_client
    async def testSetHomeAirTempTargetRawString(self, client, ws):
        ws.recv.return_value = b""

        await client.set_values({"A_CYC_HOME_AIR_TEMP_TARGET": "19"})

        ws.send.assert_called_once_with(
            struct.pack("HHHHH", 4, 249, 20508, 29215, 49976)
        )
