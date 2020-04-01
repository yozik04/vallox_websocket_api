class ValloxApiException(Exception):
    pass


class ValloxWebsocketException(ValloxApiException):
    """
    Is raised on any websocket error
    """
