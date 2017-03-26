# vallox_websocket_api

Python version of WebSocket API for Vallox ventilation units

Current code can:
* Fetch and decode metrics

# Requirements

Your ventilation unit should be connected to LAN.

Code will use websockets API that Valox own web interface uses.

# Dependencies

Code uses next libraries

* numpy
* websocket-client

# Installation

```
pip install https://github.com/yozik04/vallox_websocket_api
```

# Usage

Straight forward

```python

from vallox_websocket_api import Client

client = Client('192.168.1.2')
metrics = client.fetch_metrics()

from pprint import pprint
pprint(metrics)
```

Or if you want just a subset of metrics:

```python

from vallox_websocket_api import Client

client = Client('192.168.1.2')
metrics = client.fetch_metrics([
  'A_CYC_TEMP_EXHAUST_AIR',
  'A_CYC_TEMP_EXTRACT_AIR',
  'A_CYC_TEMP_OUTDOOR_AIR',
  'A_CYC_TEMP_SUPPLY_AIR',
  'A_CYC_TEMP_SUPPLY_CELL_AIR'
])

from pprint import pprint
pprint(metrics)
```

# Supported units

Tested only with **Vallox 145 MV**

But API should also work with next units:

    "Vallox 096 MV",
    "Vallox 110 MV",
    "Vallox 145 MV",
    "Vallox 245 MV",
    "ValloPlus 270 MV",
    "ValloPlus 350 MV",
    "ValloPlus 510 MV",
    "ValloPlus 850 MV",
    "Vallox TSK Multi 50 MV",
    "Vallox TSK Multi 80 MV",
    "ValloMulti 200 MV",
    "ValloMulti 300 MV",
    "DV96 Adroit",
    "DV110 Adroit",
    "DV145 Adroit",
    "DV245 Adroit",
    "DV TSK Multi 50 Adroit",
    "DV TSK Multi 80 Adroit"

# Future plans

* Fully control the unit with this API