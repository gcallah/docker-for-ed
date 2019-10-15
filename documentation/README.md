# Docker Style Guide 
  
This document serves as a coding standard for how to integrate docker in projects.

This document is working in progress.

# Dockerfiles

All docker-relative config files should be put in a `docker`  directory. 

Each project should contain two dockerfile:

* `Dockerfile` for creating the images for dev environment
* `Deployable` for creating the images for prod environment

Images should include all necessary packages. The required packages should be written into separate text files.  
* `requirements-prod.txt` for  `Dockerfile` 
* `requirements-dev.txt` for `Deployable`

We can import those requirements by adding the following line in our dockerfile / deployable

`COPY requirements.txt /requirements.txt`
or
`COPY requirements-dev.txt /requirements-dev.txt`

# Makefile Tasks

The `makefile` should contain the following tasks for building images and deploy the images.:
* `dev_container`
* `prod_container`
* `deploy_container`

## Example
```
# makefile

# dev container has dev tools
dev_container: $(DOCKER_DIR)/Dockerfile $(DOCKER_DIR)/requirements.txt $(DOCKER_DIR)/requirements-dev.txt
	docker build -t gcallah/$(REPO)-dev docker

# prod container has only what's needed to run
prod_container: $(DOCKER_DIR)/Deployable $(DOCKER_DIR)/requirements.txt
	docker system prune -f
	docker build -t gcallah/$(REPO) docker --no-cache --build-arg repo=$(REPO) -f $(DOCKER_DIR)/Deployable

# deploy prod container
deploy_container:
	docker push gcallah/$(REPO):latest
```

# Entry file naming conventions

Each project should have `.dev_cont.sh` and `prod_cont.sh`  for creating docker containers.

## Example

* `.dev_cont.sh`

```
#!/bin/sh
export HOST_PORT="8000"
export REPO=indras_net
if [ $1 ]
then
    HOST_PORT=$1
fi

echo "Going to remove any lingering indra-dev container."
docker rm indra-dev 2> /dev/null || true
echo "Now running docker to spin up the container."
docker run -it -p $HOST_PORT:8000 -v $PWD:/home/IndrasNet gcallah/$REPO-dev bash

```

* `.prod_cont.sh`

```
#!/bin/sh
export HOST_PORT="8000"
export CONT_PORT="8000"
export REPO="indras_net"
export DH_ACCOUNT="gcallah"
export CONTAINER="$DH_ACCOUNT/$REPO"
if [ $1 ]
then
    HOST_PORT=$1
fi

echo "Going to remove any lingering indra container."
docker rm $REPO 2> /dev/null || true
echo "Now running docker to spin up the container."
docker run -it -p $HOST_PORT:$CONT_PORT $CONTAINER /home/$REPO/runserver.sh

```
