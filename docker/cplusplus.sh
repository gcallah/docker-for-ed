#!/bin/sh
docker rm gcc 2> /dev/null || true 
docker run -it gcc bash
