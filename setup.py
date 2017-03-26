from distutils.core import setup

setup(
  name='vallox_websocket_api',
  version='0.1',
  packages=['vallox_websocket_api'],
  url='https://github.com/yozik04/vallox_websocket_api',
  license='LGPL 3',
  author='yozik04',
  author_email='yozik04@gmail.com',
  description='Vallox WebSocket client',
  requires=['numpy', 'websocket-client']
)
