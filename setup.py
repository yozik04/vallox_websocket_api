import sys

from os import path as p

try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup, find_packages


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
  version='0.3',
  packages=['vallox_websocket_api'],
  url='https://github.com/yozik04/vallox_websocket_api',
  license='LGPL 3',
  author='yozik04',
  author_email='yozik04@gmail.com',
  description='Vallox WebSocket client',
  install_requires=list(parse_requirements('requirements.txt'))
)