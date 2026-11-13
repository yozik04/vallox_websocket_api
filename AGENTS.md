# Agent guide

Async Python library for the local WebSocket API used by Vallox ventilation
units and compatible devices. Python 3.11+; this is a library, not a web service.

## Bootstrap and checks

Run from the repository root; use an existing virtualenv or create one:

```sh
python3 -m venv venv
venv/bin/python -m pip install -U pip
venv/bin/python -m pip install -e . --group test
venv/bin/python -m pytest -q
```

Tests run offline with mocked WebSockets. Start with the affected test files,
for example `venv/bin/python -m pytest -q tests/test_vallox_profile.py tests/test_client.py`.
For parser changes, run `venv/bin/python -m pytest -q tests/data/test_data_model.py`.
No device, credentials, Docker, or external service is needed.

CI is defined in `.github/workflows/test.yml`: flake8 and tox on Python
3.11 through 3.15. For CI-equivalent tests on one installed interpreter, install
tox and run `venv/bin/python -m tox -e py315` (choose the matching environment).
Tox changes into `tests/`, so its test paths differ from root-level pytest.
Missing interpreters are skipped by the default tox matrix; that is not proof
that every supported Python version passed.

Formatting and other checks live in `.pre-commit-config.yaml` (Black, isort,
flake8, codespell). Install pre-commit when needed and run
`venv/bin/pre-commit run --files <changed-files>` with explicit file paths.
Keep Python 3.11 compatibility; follow existing typing and import conventions.
Do not reformat unrelated files.

## Where to work

- `vallox_websocket_api/vallox.py`: public `Vallox` helpers, `MetricData` getters,
  enums, and profile-to-register mappings.
- `vallox_websocket_api/client.py`: transport/retries, metric conversion, and
  write validation (`Client.SETTABLE_INT_VALS`).
- `vallox_websocket_api/messages.py`: binary protocol schemas using Construct.
- `vallox_websocket_api/data/`: firmware constants, JS parsing, bundled JSON
  models, and register-to-buffer offset calculation.
- `tests/conftest.py`: shared `client`, `vallox`, mocked `ws`, `raw_table`, and
  `js_bundle` fixtures. Most functional tests use the bundled **2.0.16** model.
- `tests/data/js/`: firmware reference bundles. Search specific constants rather
  than reading whole minified files. Preserve existing fixtures.
- `README.md`: public API usage; `vallox_websocket_api/__init__.py`: exports.
  `pyproject.toml`: the single source for package metadata, runtime
  dependencies, the `test` dependency group, and tool settings (pytest, tox,
  mypy, Black, isort, coverage); flake8 cannot read it, so its config is in
  `.flake8`. Do not reintroduce `setup.cfg`, `setup.py`, `tox.ini`, or
  `mypy.ini`. Keep setuptools as the build backend; do not raise its minimum
  (currently 77, for SPDX `license`) without a concrete build need.

## Protocol and hardware guardrails

- Never connect to a real unit unless the task authorizes it. Read-only
  inspection does not authorize settings changes, including browser UI actions.
  Use mocks for write tests; distinguish offline checks from live validation.
- A constant appearing in firmware does not prove it is writable or exposed by
  the Web UI. Trace its use before adding support. Keep helpers, profile maps,
  the write allowlist, tests, and public documentation consistent.
- Profile-setting getters return `None` when the setting does not apply;
  setters still validate inputs with `ValloxInvalidInputException`.
- Timed profiles distinguish stored `*_TIME`, active `*_TIMER`, and
  `*_TIMER_ENABLED`. `set_profile(duration=None)` or `0` uses the stored
  duration; explicit 1..65534 enables the timer switch. `65535` means unlimited,
  not missing data. Do not silently restore the timer switch afterward.
- New Vallox firmware fixtures use `<version>.bundle.js`. The `js_bundle`
  fixture automatically includes all non-underscore-prefixed `*.js` files.
  Passing parser tests for a bundle does not test functional behavior on that
  firmware or justify replacing the bundled JSON models.
