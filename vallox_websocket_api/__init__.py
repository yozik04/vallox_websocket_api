from .client import Client, MetricValue
from .exceptions import (
    ValloxApiException,
    ValloxException,
    ValloxInvalidInputException,
    ValloxWebsocketException,
)
from .vallox import (
    Alarm,
    CellState,
    DefrostMode,
    MetricData,
    Profile,
    SupplyHeatingAdjustMode,
    Vallox,
)

__all__ = [
    "Alarm",
    "Client",
    "MetricData",
    "MetricValue",
    "Profile",
    "Vallox",
    "ValloxException",
    "ValloxInvalidInputException",
    "ValloxApiException",
    "ValloxWebsocketException",
    "CellState",
    "SupplyHeatingAdjustMode",
    "DefrostMode",
]

__version__ = "6.0.0"
