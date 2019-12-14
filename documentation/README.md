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

We can import those requirements by adding the following line in our dockerfile or deployable

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

# Tests

Docker containers should have a unit test which tests the functionality of the container.

In the `tests:` section of the `makefile`, to do a working test of a Docker container, you add the following line:

```
	$(CONTCMD) [docker hub name] [local name]
```

The `[docker hub name]` is the name used on the Docker Hub (minus the `gcallah/` prefix) and the `[local name]` is the directory name containing the container's `Dockerfile` which is in the `docker_images/` directory.

A test should also be added to the `/tests` directory with the filename format of `test_docker-[local name].py`.

An example test is as follows:
```
#!/usr/bin/python3

print("\n[INFO] Running tests for Docker Java image...\n")

import docker
import unittest2 as unittest

client = docker.from_env()

class TestLanguage(unittest.TestCase):
    def test_java(self):
        print("[INFO] Checking Java Installation")
        response = client.containers.run("java", command="which java", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "/usr/bin/java\n", "Java missing!")
        '''
        response = client.containers.run("java", command="java -version", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "java version \"1.8.0_201\"\nJava(TM) SE Runtime Environment (build 1.8.0_201-b09)\nJava HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)\n", "no java installed!")
        '''

# Add tests for sample code
class TestSampleCode(unittest.TestCase):
    def test_sample(self):
        print("[INFO] Testing sample java code ")
        response = client.containers.run("java", command="java Test", remove=True, name="javacontainer").decode("utf-8")
        self.assertEqual(response, "Hello World\n", "Error in Hello World sample!")

if __name__ == '__main__':
    unittest.main()
```

The test should be modified according to the needs of the test.
