import datetime

from construct import Struct, Const, Int16ul, Int16ub, Int8ub, this, len_, Rebuild, Checksum, RawCopy, \
    GreedyRange, Adapter, Bytes, Enum

from .constants import vlxDevConstants


def checksum_16(data):
    c = 0
    for i in range(len(data) // 2):
        c = c + (data[i * 2 + 1] << 8) + data[i * 2]

    return c & 0xffff


WriteCommand = Struct(
    "address" / Int16ul,
    "value" / Int16ul
)

WriteMessageRequest = Struct(
    "fields" / RawCopy(Struct(
        "length" / Rebuild(Int16ul, len_(this.items) * WriteCommand.sizeof() // Int16ul.sizeof() + 2),
        "command" / Const(vlxDevConstants.WS_WEB_UI_COMMAND_WRITE_DATA, Int16ul),
        "items" / WriteCommand[len_(this.items)],
    )),
    "checksum" / Checksum(Int16ul,
                          lambda data: checksum_16(data),
                          this.fields.data)
)

ReadTableResponse = GreedyRange(Int16ub)

ReadTableRequest = Struct(
    "fields" / RawCopy(Struct(
        "length" / Const(3, Int16ul),
        "command" / Const(vlxDevConstants.WS_WEB_UI_COMMAND_READ_TABLES, Int16ul),
        "items" / Const(0, Int16ul),
    )),
    "checksum" / Checksum(Int16ul,
                          lambda data: checksum_16(data),
                          this.fields.data)
)

LogReadRequest = Struct(
    "fields" / RawCopy(Struct(
        "length" / Const(2, Int16ul),
        "command" / Const(vlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW, Int16ul)
    )),
    "checksum" / Checksum(Int16ul,
                          lambda data: checksum_16(data),
                          this.fields.data)
)

LogReadResponse1 = Struct(
    "fields" / RawCopy(Struct(
        "length" / Const(3, Int16ul),
        "command" / Const(vlxDevConstants.WS_WEB_UI_COMMAND_LOG_RAW, Int16ul),
        "pages" / Int16ul,
    )),
    "checksum" / Checksum(Int16ul,
                          lambda data: checksum_16(data),
                          this.fields.data)
)


class DateAdapter(Adapter):
    def _decode(self, obj, context, path):
        return datetime.datetime(year=2000 + obj[4], month=obj[3], day=obj[2], hour=obj[1], minute=obj[0])


LogItemId = Enum(Int8ub,
                 extract_air_temp=0,
                 exhaust_air_temp=1,
                 outdoor_air_temp=2,
                 supply_air_temp=3,
                 co2=4,
                 humidity=5
                 )

LogReadResponse2 = GreedyRange(Struct(
    "id" / LogItemId,
    "date" / DateAdapter(Bytes(5)),
    "value" / Int16ul
)).compile()
