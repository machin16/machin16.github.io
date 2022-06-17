#!/usr/bin/env python
__author__ = 'justinarmstrong'

import sys
import pygame as pg
from data.main import main
import cProfile


if _name == 'main_':
    main()
    pg.quit()
    sys.exit()
