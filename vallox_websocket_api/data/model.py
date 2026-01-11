import asyncio
from collections import defaultdict
from functools import cached_property
from importlib.resources import files
import json
import logging
from pathlib import Path
import re
from typing import Optional

import aiohttp

from vallox_websocket_api.data.buffer_ranges import BufferRanges
from vallox_websocket_api.data.constants import ConstantsDict
from vallox_websocket_api.exceptions import DataModelReadException

logger = logging.getLogger("vallox").getChild(__name__)


class DataModel:
    """Data model for Vallox websocket API."""

    _re_parse_constants = re.compile(
        r"(Vlx\w+).(\w+)\s*=\s*([\w.]+)\s*[,;]", re.IGNORECASE
    )
    _re_parse_number = re.compile(r"(\d+e?\d*)")
    _constants: Optional[ConstantsDict] = None
    _buffer_ranges: Optional[BufferRanges] = None

    @cached_property
    def addresses(self) -> dict:
        assert self._constants, "No constants loaded"
        return {
            key: value
            for key, value in self._constants["VlxDevConstants"].items()
            if key.startswith("A_")
        }

    @cached_property
    def websocket_constants(self) -> dict:
        assert self._constants, "No constants loaded"
        return {
            key: value
            for key, value in self._constants["VlxDevConstants"].items()
            if key.startswith("WS_")
        }

    @property
    def is_valid(self) -> bool:
        try:
            assert self._constants is not None, "Constants not loaded"
            assert self._buffer_ranges is not None, "Buffer ranges not initialized"

            assert len(self._buffer_ranges) > 0, "No buffer ranges defined"

            offset = self.calculate_offset(0)
            if offset is None:
                return False
        except (KeyError, AssertionError):
            return False

        return True

    async def read_model_from_unit(self, url) -> None:
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url, timeout=5) as response:
                    data = await response.text()

                    self._constants = self._parse_js_file(data)

                    assert self.is_valid, "Invalid model"
        except Exception as ex:
            raise DataModelReadException(f"Failed to read model from {url}") from ex

    async def read_model_from_js_file(self, js_file: Path) -> None:
        try:
            data = await asyncio.get_running_loop().run_in_executor(
                None, js_file.read_text
            )
            self._constants = self._parse_js_file(data)

            assert self.is_valid, "Invalid model"
        except Exception as ex:
            raise DataModelReadException(f"Failed to read model from {js_file}") from ex

    def _parse_js_file(self, data: str) -> ConstantsDict:
        constants: ConstantsDict = defaultdict(dict)

        def parse_number(value: str) -> int:
            value = value.strip()
            if value.startswith("0x"):
                # Convert hexadecimal to integer
                return int(value, 16)
            else:
                # Convert string to float and then to integer
                return int(float(value))

        for match in self._re_parse_constants.finditer(data):
            parent_key = match.group(1)
            if parent_key not in (
                "VlxDevConstants",
                "VlxReadConstants",
            ):
                continue

            key = match.group(2)
            value = match.group(3)
            if self._re_parse_number.match(value):
                value = parse_number(value)
            else:
                path = value.split(".")
                if len(path) == 2:
                    try:
                        value = constants[path[0]][path[1]]
                    except KeyError:
                        logger.warning(f"Failed to resolve {value}")
                        continue
                else:
                    logger.warning(f"Failed to resolve {value}")
                    continue

            if key in constants[parent_key]:
                logger.debug(f"Duplicate key {key} in {parent_key}. Skipping...")
                continue

            constants[parent_key][key] = value

        self._buffer_ranges = BufferRanges.from_constants(constants)

        return constants

    async def read_bundled(self, version: str) -> None:
        try:
            json_file = files("vallox_websocket_api.data").joinpath(f"{version}.json")
            if not json_file.is_file():
                raise DataModelReadException(f"Failed to read local model {version}")

            data = await asyncio.get_running_loop().run_in_executor(
                None, json_file.read_text
            )
            self._constants = json.loads(data)

            assert isinstance(self._constants, dict), "Invalid bundled model format"

            # Build buffer ranges from the loaded constants
            self._buffer_ranges = BufferRanges.from_constants(self._constants)

            assert self.is_valid, "Invalid model"
        except Exception as ex:
            raise DataModelReadException(
                f"Failed to read local model {version}"
            ) from ex

    def calculate_offset(self, aIndex: int) -> Optional[int]:
        """Map a Modbus address to its buffer index.

        The buffer contains data ranges packed sequentially. This method
        uses a pre-calculated mapping built during initialization.

        Args:
            aIndex: Modbus-style address (e.g., 4353 for A_CYC_FAN_SPEED)

        Returns:
            Buffer index (0-based position in the data array)
        """
        assert self._constants, "No constants loaded"
        assert self._buffer_ranges, "Buffer ranges not initialized"

        return self._buffer_ranges.calculate_offset(aIndex)
