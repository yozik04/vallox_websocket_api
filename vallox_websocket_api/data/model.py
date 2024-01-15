import asyncio
from collections import defaultdict
from functools import cached_property
from importlib.resources import files
import json
import logging
from pathlib import Path
import re
from typing import Any, Dict, Optional

import aiohttp

logger = logging.getLogger("vallox").getChild(__name__)


class DataModelReadException(Exception):
    pass


class DataModel:
    """Data model for Vallox websocket API."""

    # VlxDevConstants.A_CYC_SCHEDULE_MONDAY_22=40983
    # vlxOffsetObject.CYC_NUM_OF_HW_STATES=VlxReadConstants.CYC_NUM_OF_HW_STATES
    re_parse_constants = re.compile(
        r"(Vlx\w+).(\w+)\s*=\s*([\w.]+)\s*[,;]", re.IGNORECASE
    )
    re_parse_number = re.compile(r"(\d+e?\d*)")
    constants: Optional[Dict[str, Any]] = None

    @cached_property
    def addresses(self) -> dict:
        assert self.constants, "No constants loaded"
        return {
            key: value
            for key, value in self.constants["VlxDevConstants"].items()
            if key.startswith("A_")
        }

    @cached_property
    def websocket_constants(self) -> dict:
        assert self.constants, "No constants loaded"
        return {
            key: value
            for key, value in self.constants["VlxDevConstants"].items()
            if key.startswith("WS_")
        }

    @property
    def is_valid(self) -> bool:
        try:
            self.calculate_offset(0)
        except (KeyError, AssertionError):
            return False

        return True

    async def read_model_from_unit(self, url) -> None:
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url, timeout=5) as response:
                    data = await response.text()

                    self.constants = self._parse_js_file(data)

                    assert self.is_valid, "Invalid model"
        except Exception as ex:
            raise DataModelReadException(f"Failed to read model from {url}") from ex

    async def read_model_from_js_file(self, js_file: Path) -> None:
        try:
            data = await asyncio.get_running_loop().run_in_executor(
                None, js_file.read_text
            )
            self.constants = self._parse_js_file(data)

            assert self.is_valid, "Invalid model"
        except Exception as ex:
            raise DataModelReadException(f"Failed to read model from {js_file}") from ex

    def _parse_js_file(self, data: str) -> dict:
        constants: Dict[str, Dict[str, int]] = defaultdict(dict)

        def parse_number(value: str) -> int:
            value = value.strip()
            if value.startswith("0x"):
                # Convert hexadecimal to integer
                return int(value, 16)
            else:
                # Convert string to float and then to integer
                return int(float(value))

        for match in self.re_parse_constants.finditer(data):
            parent_key = match.group(1)
            if parent_key not in (
                "VlxDevConstants",
                "VlxReadConstants",
                "vlxOffsetObject",
            ):
                continue

            key = match.group(2)
            value = match.group(3)
            if self.re_parse_number.match(value):
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
                logger.info(f"Duplicate key {key} in {parent_key}. Skipping...")
                continue

            constants[parent_key][key] = value

        self._precalculate_offsets(constants)

        return constants

    async def read_bundled(self, version: str) -> None:
        try:
            json_file = files("vallox_websocket_api.data").joinpath(f"{version}.json")
            if not json_file.is_file():
                raise DataModelReadException(f"Failed to read local model {version}")

            data = await asyncio.get_running_loop().run_in_executor(
                None, json_file.read_text
            )
            self.constants = json.loads(data)

            assert self.is_valid, "Invalid model"
        except Exception as ex:
            raise DataModelReadException(
                f"Failed to read local model {version}"
            ) from ex

    @staticmethod
    def _precalculate_offsets(constants: dict) -> None:
        sum_ = 0
        for key, value in constants["vlxOffsetObject"].items():
            sum_ += value
            constants["vlxOffsetObject"][key] = sum_ + 1

    def calculate_offset(self, aIndex: int) -> int:
        assert self.constants, "No constants loaded"

        VlxDevConstants = self.constants["VlxDevConstants"]
        vlxOffsetObject = self.constants["vlxOffsetObject"]
        range_to_offset = {
            range(
                VlxDevConstants["RANGE_START_g_cyclone_general_info"],
                VlxDevConstants["RANGE_END_g_cyclone_general_info"] + 1,
            ): 1,
            range(
                VlxDevConstants["RANGE_START_g_typhoon_general_info"],
                VlxDevConstants["RANGE_END_g_typhoon_general_info"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_GENERAL_INFO"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_hw_state"],
                VlxDevConstants["RANGE_END_g_cyclone_hw_state"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_GENERAL_TYP_INFO"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_sw_state"],
                VlxDevConstants["RANGE_END_g_cyclone_sw_state"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_HW_STATES"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_time"],
                VlxDevConstants["RANGE_END_g_cyclone_time"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_SW_STATES"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_output"],
                VlxDevConstants["RANGE_END_g_cyclone_output"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_TIME_ELEMENTS"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_input"],
                VlxDevConstants["RANGE_END_g_cyclone_input"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_OUTPUTS"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_config"],
                VlxDevConstants["RANGE_END_g_cyclone_config"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_INPUTS"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_settings"],
                VlxDevConstants["RANGE_END_g_cyclone_settings"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_CONFIGS"],
            range(
                VlxDevConstants["RANGE_START_g_typhoon_settings"],
                VlxDevConstants["RANGE_END_g_typhoon_settings"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_CYC_SETTINGS"],
            range(
                VlxDevConstants["RANGE_START_g_self_test"],
                VlxDevConstants["RANGE_END_g_self_test"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_TYP_SETTINGS"],
            range(
                VlxDevConstants["RANGE_START_g_faults"],
                VlxDevConstants["RANGE_END_g_faults"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_SELF_TESTS"],
            range(
                VlxDevConstants["RANGE_START_g_cyclone_weekly_schedule"],
                VlxDevConstants["RANGE_END_g_cyclone_weekly_schedule"] + 1,
            ): vlxOffsetObject["CYC_NUM_OF_FAULTS"],
        }
        if (
            "RANGE_START_g_cyclone_extended" in VlxDevConstants
            and "RANGE_END_g_cyclone_extended" in VlxDevConstants
            and "CYC_NUM_OF_SCHEDULED_EVENTS" in vlxOffsetObject
        ):
            range_to_offset[
                range(
                    VlxDevConstants["RANGE_START_g_cyclone_extended"],
                    VlxDevConstants["RANGE_END_g_cyclone_extended"] + 1,
                )
            ] = vlxOffsetObject["CYC_NUM_OF_SCHEDULED_EVENTS"]

        for r, offset in range_to_offset.items():
            if aIndex in r:
                return aIndex - r.start + offset - 1

        return 0
