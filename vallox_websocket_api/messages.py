import datetime
from functools import cached_property

from construct import (
    Adapter,
    Bytes,
    Checksum,
    Const,
    Enum,
    GreedyRange,
    Int8ub,
    Int16ub,
    Int16ul,
    RawCopy,
    Rebuild,
    Struct,
    len_,
    this,
)

from vallox_websocket_api.data.model import DataModel


class Messages:
    """Constructs for Vallox websocket messages."""

    def __init__(self, data_model: DataModel) -> None:
        self.data_model = data_model

    @cached_property
    def ws_command(self) -> Enum:
        ws_constants = self.data_model.websocket_constants

        return Enum(
            Int16ul,
            READ_DATA=ws_constants["WS_WEB_UI_COMMAND_READ_DATA"],
            WRITE_DATA=ws_constants["WS_WEB_UI_COMMAND_WRITE_DATA"],
            READ_TABLES=ws_constants["WS_WEB_UI_COMMAND_READ_TABLES"],
            LOG_RAW=ws_constants["WS_WEB_UI_COMMAND_LOG_RAW"],
        )

    @cached_property
    def write_request(self) -> Struct:
        return Struct(
            "fields"
            / RawCopy(
                Struct(
                    "length"
                    / Rebuild(
                        Int16ul,
                        len_(this.items) * 2 + 2,
                    ),
                    "command"
                    / Const(
                        self.ws_command.WRITE_DATA,
                        self.ws_command,
                    ),
                    "items" / _WriteCommand[(this.length - 2) // 2],
                )
            ),
            "checksum" / Checksum(Int16ul, _checksum_16, this.fields.data),
        ).compile()

    @cached_property
    def read_table_request(self) -> Struct:
        return Struct(
            "fields"
            / RawCopy(
                Struct(
                    "length" / Const(3, Int16ul),
                    "command"
                    / Const(
                        self.ws_command.READ_TABLES,
                        self.ws_command,
                    ),
                    "items" / Const(0, Int16ul),
                )
            ),
            "checksum" / Checksum(Int16ul, _checksum_16, this.fields.data),
        ).compile()

    @cached_property
    def read_table_response(self) -> GreedyRange:
        return GreedyRange(Int16ub).compile()

    @cached_property
    def log_read_request(self) -> Struct:
        return Struct(
            "fields"
            / RawCopy(
                Struct(
                    "length" / Const(2, Int16ul),
                    "command"
                    / Const(
                        self.ws_command.LOG_RAW,
                        self.ws_command,
                    ),
                )
            ),
            "checksum" / Checksum(Int16ul, _checksum_16, this.fields.data),
        ).compile()

    @cached_property
    def log_read_response1(self) -> Struct:
        return Struct(
            "fields"
            / RawCopy(
                Struct(
                    "length" / Const(3, Int16ul),
                    "command"
                    / Const(
                        self.ws_command.LOG_RAW,
                        self.ws_command,
                    ),
                    "pages" / Int16ul,
                )
            ),
            "checksum" / Checksum(Int16ul, _checksum_16, this.fields.data),
        ).compile()

    @cached_property
    def log_read_response2(self) -> GreedyRange:
        return GreedyRange(
            Struct(
                "id" / _LogItemId, "date" / _DateAdapter(Bytes(5)), "value" / Int16ul
            )
        ).compile()


_WriteCommand = Struct("address" / Int16ul, "value" / Int16ul)


class _DateAdapter(Adapter):
    def _decode(self, obj, context, path) -> datetime.datetime:
        return datetime.datetime(
            year=2000 + obj[4], month=obj[3], day=obj[2], hour=obj[1], minute=obj[0]
        )


_LogItemId = Enum(
    Int8ub,
    extract_air_temp=0,
    exhaust_air_temp=1,
    outdoor_air_temp=2,
    supply_air_temp=3,
    co2=4,
    humidity=5,
)


def _checksum_16(data: bytes) -> int:
    c = 0
    for i in range(len(data) // 2):
        c = c + (data[i * 2 + 1] << 8) + data[i * 2]

    return c & 0xFFFF
