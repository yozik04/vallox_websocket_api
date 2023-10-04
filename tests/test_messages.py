import binascii
import struct

from vallox_websocket_api.client import calculate_offset, to_celsius
from vallox_websocket_api.constants import vlxDevConstants
from vallox_websocket_api.messages import (
    LogReadRequest,
    LogReadResponse1,
    ReadTableRequest,
    ReadTableResponse,
    WriteMessageRequest,
)


def test_read_table_message_request():
    expected = struct.pack("HHHH", 3, 246, 0, 249)

    res = ReadTableRequest.build({})

    assert expected == res


def test_write_message_request():
    expected = struct.pack("HHHHH", 4, 249, 20508, 29215, 49976)

    res = WriteMessageRequest.build(
        {
            "fields": {
                "value": {
                    "items": [
                        {
                            "address": vlxDevConstants.A_CYC_HOME_AIR_TEMP_TARGET,
                            "value": 29215,
                        }
                    ]
                }
            }
        }
    )

    assert expected == res


def test_log_read_message():
    expected = struct.pack("HHH", 2, 243, 245)

    res = LogReadRequest.build({})

    assert expected == res


def test_read_table_message_response():
    data = ReadTableResponse.parse(
        binascii.unhexlify(
            "0024000000000000000000000000000001000800030000000000000061df98b100030003203fb9500331000000000000000000560000000000000000000000000000000000000000001b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b000f732a6ca969a171d1730800010000022700000028000000000000000001a6029e000100000028ffffffffffffffffffffffffffffffffffffffffffffffff000000000000000057c503e8ffffffffffff000000190000000000010000000000000000000300001b98012000a50000000000000000001e00010000000100000000000000000007001b000f001700010012000200070044000000010000000000000007003200320001000000000000001e0000c0a80501ffffff0000000000000000000000000000000000000000000000000000000000c0a8050c86076097f78844b7ac4db61e502fe4f2004c004c000100c00101001c001e000a00320000003703840000708f00320032000a0000000000010000000a721f0000000000010000000f728300000000000000000064715700000000000000000000000000000000000000010037001e000000000000000068bf71bb000083910000002600b4000000010001000000010001001e000f00080001001200000003000000000000000000000017000003e90000000000000001000100010000000a003200010000000000000000000000000000000000000000001000000000000000000000000000540048000000000000000000000000000000c80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        )
    )

    assert 20.0 == to_celsius(
        data[calculate_offset(vlxDevConstants.A_CYC_HOME_AIR_TEMP_TARGET)]
    )


def test_log_read_response():
    response = struct.pack("HHHH", 3, 243, 6, 252)

    result = LogReadResponse1.parse(response)

    assert 6 == result.fields.value.pages
