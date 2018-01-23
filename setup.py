import sys

from os import path as p

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup


def read(filename, parent=None):
    parent = (parent or __file__)

    try:
        with open(p.join(p.dirname(parent), filename)) as f:
            return f.read()
    except IOError:
        return ''


def parse_requirements(filename, parent=None):
    parent = (parent or __file__)
    filepath = p.join(p.dirname(parent), filename)
    content = read(filename, parent)

    for line_number, line in enumerate(content.splitlines(), 1):
        candidate = line.strip()

        if candidate.startswith('-r'):
            for item in parse_requirements(candidate[2:].strip(), filepath):
                yield item
        else:
            yield candidate

setup(
  name='vallox_websocket_api',
  packages=['vallox_websocket_api'],
  version='1.1.0',
  description='Vallox WebSocket API',
  author='Jevgeni Kiski',
  author_email='yozik04@gmail.com',
  url='https://github.com/yozik04/vallox_websocket_api',
  license='LGPL 3',
  download_url='https://github.com/yozik04/vallox_websocket_api/archive/1.0.0.tar.gz',
  keywords = 'vallox api',
  classifiers = [
      'Development Status :: 5 - Production/Stable',
      'Intended Audience :: Developers',
      'License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)',
      'Operating System :: OS Independent',
      'Programming Language :: Python',
      'Programming Language :: Python :: 3'
  ],
  install_requires=list(parse_requirements('requirements.txt')),
  tests_require=[
    'mock',
    'pytest'
  ]
)
