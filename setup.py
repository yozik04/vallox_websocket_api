from os import path as p

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup


def read(filename, parent=None):
    parent = parent or __file__

    try:
        with open(p.join(p.dirname(parent), filename)) as f:
            return f.read()
    except IOError:
        return ""


setup(
    name="vallox_websocket_api",
    packages=["vallox_websocket_api"],
    version="2.10.0",
    python_requires=">=3.6.0, <4",
    description="Vallox WebSocket API",
    author="Jevgeni Kiski",
    author_email="yozik04@gmail.com",
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    url="https://github.com/yozik04/vallox_websocket_api",
    license="LGPL 3",
    keywords="vallox api",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
    ],
    install_requires=[
        "websockets >= 9.1, < 11.0",
        "construct >= 2.9.0, < 3.0.0"
    ],
    setup_requires=["wheel"],
    tests_require=["mock", "asynctest"],
)
