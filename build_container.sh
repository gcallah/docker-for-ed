#!/bin/sh
# NOTE: You do not need to add the gcallah/ prefix, the tests don't require this.
docker build -t $1 docker_images/$2/
