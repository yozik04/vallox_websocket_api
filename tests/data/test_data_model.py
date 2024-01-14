from pathlib import Path

import pytest

from vallox_websocket_api.data.model import DataModel

js_folder = Path(__file__).parent / "js"
js_files = [js_file.name for js_file in js_folder.glob("*.js")]

json_folder = Path(__file__).parent.parent.parent / "vallox_websocket_api" / "data"
json_files = [json_file.name for json_file in json_folder.glob("*.json")]


@pytest.fixture
def data_model():
    return DataModel()


@pytest.mark.asyncio
@pytest.mark.parametrize("js_file", js_files)
async def test_read_model_from_js_file(data_model, js_file):
    # Test reading model from js file
    await data_model.read_model_from_js_file(js_folder / js_file)
    assert data_model.is_valid


@pytest.mark.asyncio
@pytest.mark.parametrize("json_file", json_files)
async def test_read_bundled(data_model, json_file):
    # Test reading model from js file
    await data_model.read_bundled(json_file[:-5])
    assert data_model.is_valid
