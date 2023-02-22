import struct


async def testSetHomeAirTempTargetRawInt(client, ws):
    # [4, 249, 20508, 29215, 49976]
    ws.recv.return_value = b""

    await client.set_values({"A_CYC_HOME_AIR_TEMP_TARGET": 19})

    ws.send.assert_called_once_with(struct.pack("HHHHH", 4, 249, 20508, 29215, 49976))


async def testSetHomeAirTempTargetRawFloat(client, ws):
    ws.recv.return_value = b""

    await client.set_values({"A_CYC_HOME_AIR_TEMP_TARGET": 19.0})

    ws.send.assert_called_once_with(struct.pack("HHHHH", 4, 249, 20508, 29215, 49976))


async def testSetHomeAirTempTargetRawString(client, ws):
    ws.recv.return_value = b""

    await client.set_values({"A_CYC_HOME_AIR_TEMP_TARGET": "19"})

    ws.send.assert_called_once_with(struct.pack("HHHHH", 4, 249, 20508, 29215, 49976))
