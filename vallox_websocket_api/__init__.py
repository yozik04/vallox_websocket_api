from .client import Client
from .exceptions import (
    ValloxApiException,
    ValloxException,
    ValloxInvalidInputException,
    ValloxWebsocketException,
)
from .vallox import (
    PROFILE,
    PROFILE_TO_SET_FAN_SPEED_METRIC_MAP,
    PROFILE_TO_SET_TEMPERATURE_METRIC_MAP,
    Vallox,
)

__all__ = [
    "Client",
    "Vallox",
    "PROFILE",
    "PROFILE_TO_SET_FAN_SPEED_METRIC_MAP",
    "PROFILE_TO_SET_TEMPERATURE_METRIC_MAP",
    "ValloxException",
    "ValloxInvalidInputException",
    "ValloxApiException",
    "ValloxWebsocketException",
]

__version__ = "4.0.3"
