import logging
import os
from pathlib import Path
from typing import Union

import metview
import numpy

logger = logging.getLogger(__name__)


def read_geopoints(path: Union[Path, str]):
    if isinstance(path, Path):
        path = str(path)

    if not os.path.exists(path):
        raise IOError(f"File does not exist: {path}")

    return metview.read(path)


def get_geopoints_values(geopoints: metview.bindings.Geopoints) -> numpy.ndarray:
    if "value_0" in geopoints.columns():
        return geopoints["value_0"]

    return geopoints.values()
