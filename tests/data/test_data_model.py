from pathlib import Path

import pytest

from vallox_websocket_api.data.model import DataModel

json_folder = Path(__file__).parent.parent.parent / "vallox_websocket_api" / "data"
json_files = [json_file.name for json_file in json_folder.glob("*.json")]


@pytest.fixture
def data_model():
    return DataModel()


@pytest.mark.asyncio
async def test_read_model_from_js_file(data_model, js_bundle):
    # Test reading model from js file
    await data_model.read_model_from_js_file(js_bundle)
    assert data_model.is_valid


@pytest.mark.asyncio
@pytest.mark.parametrize("json_file", json_files)
async def test_read_bundled(data_model, json_file):
    # Test reading model from js file
    await data_model.read_bundled(json_file[:-5])
    assert data_model.is_valid
