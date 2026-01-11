import logging
from typing import List, Optional

from vallox_websocket_api.data.constants import ConstantsDict
from vallox_websocket_api.exceptions import DataModelReadException

logger = logging.getLogger("vallox").getChild(__name__)


class BufferRange:
    """Represents a single buffer range mapping."""

    def __init__(
        self, range_start: int, range_end: int, buffer_offset: int, range_name: str
    ):
        self.range_start = range_start
        self.range_end = range_end
        self.buffer_offset = buffer_offset
        self.range_name = range_name

    @property
    def count(self) -> int:
        """Number of items in this range."""
        return self.range_end - self.range_start + 1

    def contains(self, address: int) -> bool:
        """Check if an address is within this range."""
        return self.range_start <= address <= self.range_end

    def calculate_offset(self, address: int) -> Optional[int]:
        """Calculate buffer offset for an address within this range."""
        if not self.contains(address):
            return None
        return self.buffer_offset + (address - self.range_start)


class BufferRanges:
    """Manages collection of buffer ranges for efficient address-to-offset mapping."""

    def __init__(self, ranges: List[BufferRange]):
        # Sort by range_start for efficient lookup
        self._ranges = sorted(ranges, key=lambda r: r.range_start)

    def calculate_offset(self, address: int) -> Optional[int]:
        """Map a Modbus address to its buffer index.

        Args:
            address: Modbus-style address (e.g., 4353 for A_CYC_FAN_SPEED)

        Returns:
            Buffer index (0-based position in the data array)
        """
        for buffer_range in self._ranges:
            offset = buffer_range.calculate_offset(address)
            if offset is not None:
                return offset
        return None

    def __len__(self) -> int:
        """Return number of ranges."""
        return len(self._ranges)

    @property
    def total_buffer_size(self) -> int:
        """Calculate total buffer size needed."""
        if not self._ranges:
            return 0
        # Find the maximum end position
        return max(r.buffer_offset + r.count for r in self._ranges)

    @classmethod
    def from_constants(cls, constants: ConstantsDict) -> "BufferRanges":
        """Build buffer ranges from constants dictionary.

        The buffer contains all data ranges packed sequentially. We track
        the current buffer position as we add each range.
        """
        dev = constants["VlxDevConstants"]
        vlx_read = constants.get("VlxReadConstants", {})
        ranges = []

        # Track current position in buffer
        buffer_position = 0

        # Detect firmware version
        is_fw_v2 = "RANGE_START_g_self_test" in dev

        # Helper to add a range if it exists
        def add_range(range_name: str, count_key: str, required: bool = True) -> None:
            """Add range to mapping if it exists in constants.

            Args:
                range_name: Name of the range (e.g., 'g_cyclone_general_info')
                count_key: Key in VlxReadConstants for the count (e.g., 'CYC_NUM_OF_GENERAL_INFO')
                required: If True, raises error when range is missing. If False, silently skips.
            """
            nonlocal buffer_position

            start_key = f"RANGE_START_{range_name}"
            end_key = f"RANGE_END_{range_name}"

            # Check if range exists
            has_start = start_key in dev
            has_end = end_key in dev
            has_count = count_key in vlx_read

            if has_start and has_end and has_count:
                range_start = dev[start_key]
                range_end = dev[end_key]
                count = vlx_read[count_key]

                # Add this range at current buffer position
                ranges.append(
                    BufferRange(range_start, range_end, buffer_position, range_name)
                )

                # Move buffer position forward by the number of items in this range
                buffer_position += count
            elif required:
                # Required range is missing - this is an error
                missing_parts = []
                if not has_start:
                    missing_parts.append(start_key)
                if not has_end:
                    missing_parts.append(end_key)
                if not has_count:
                    missing_parts.append(count_key)

                raise DataModelReadException(
                    f"Required range '{range_name}' is missing: {', '.join(missing_parts)}"
                )

        # Build ranges in buffer order (matches the order in JavaScript vlxBufferSize)
        # All these are required for the data model to work
        add_range("g_cyclone_general_info", "CYC_NUM_OF_GENERAL_INFO")
        add_range("g_typhoon_general_info", "CYC_NUM_OF_GENERAL_TYP_INFO")
        add_range("g_cyclone_hw_state", "CYC_NUM_OF_HW_STATES")
        add_range("g_cyclone_sw_state", "CYC_NUM_OF_SW_STATES")
        add_range("g_cyclone_time", "CYC_NUM_OF_TIME_ELEMENTS")
        add_range("g_cyclone_output", "CYC_NUM_OF_OUTPUTS")
        add_range("g_cyclone_input", "CYC_NUM_OF_INPUTS")
        add_range("g_cyclone_config", "CYC_NUM_OF_CONFIGS")
        add_range("g_cyclone_settings", "CYC_NUM_OF_CYC_SETTINGS")
        add_range("g_typhoon_settings", "CYC_NUM_OF_TYP_SETTINGS")

        # Version-specific ranges (required for their respective versions)
        if is_fw_v2:
            add_range("g_self_test", "CYC_NUM_OF_SELF_TESTS")
        else:  # FW v3+
            add_range("g_constant_flow", "CYC_NUM_OF_CF")

        # Common: faults range (required)
        add_range("g_faults", "CYC_NUM_OF_FAULTS")

        # Common ranges (required)
        add_range("g_cyclone_weekly_schedule", "CYC_NUM_OF_SCHEDULED_EVENTS")

        # Extended settings - exists in both v2 and v3, but may be optional in some versions
        add_range("g_cyclone_extended", "CYC_NUM_OF_EXT_SETTINGS", required=False)

        buffer_ranges = cls(ranges)

        # Log the mapping for debugging
        logger.debug(f"Built buffer range mapping with {len(buffer_ranges)} ranges:")
        logger.debug(f"Total buffer size: {buffer_ranges.total_buffer_size}")
        for r in buffer_ranges._ranges:
            logger.debug(
                f"{r.range_name:30s} : "
                f"  Address {r.range_start:5d}-{r.range_end:5d} ({r.count:3d} items) "
                f"→ Buffer[{r.buffer_offset:3d}-{r.buffer_offset + r.count - 1:3d}]"
            )

        return buffer_ranges
