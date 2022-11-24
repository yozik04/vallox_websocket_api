class ValloxException(Exception):
    """Base exception for vallox_websocket_api."""

    pass


class ValloxInvalidInputException(ValloxException):
    """Exception for wrong input."""

    pass


class ValloxApiException(ValloxException):
    """Exception for api errors."""

    pass


class ValloxWebsocketException(ValloxApiException):
    """Exception for websocket errors."""

    pass
