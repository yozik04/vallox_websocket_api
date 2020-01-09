# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0] - 2020-01-09
### Changed

- Set temperature now allows to set degrees with 0.1 precision [#11](https://github.com/yozik04/vallox_websocket_api/issues/11)

## [2.2.0] - 2019-07-23
### Changed

- Removed `numpy` dependency and added `construct` instead of it

## [2.1.0] - 2019-07-22
### Added

- Lib intercepts all websocket exceptions and throws ValloxWebsocketException instead.

## [2.0.0] - 2019-06-26
### Added

- First Async version of the lib

### Removed

- Python 2.x support

## [1.5.2] - 2019-06-25
### Added

- Last stable synchronous version of the library that support Python 2.7 as well as Python 3+