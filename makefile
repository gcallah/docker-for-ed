DOCKER_USER = gcallah


# Docker commands:

build-images: build-cpp build-pl

build-docker-images: build-docker-cpp build-docker-pl

pull-images: pull-cpp pull-pl

tag-images: tag-cpp tag-pl

push-images: push-cpp push-pl


# For each image below, maintain the order:
#   1. build-<image>
#   2. build-docker-<image>
#   3. run-interactive-<image>
#   4. pull-<image>
#   5. tag-<image>
#   6. push-<image>


## CPP Image

build-cpp:
	docker build -t cplusplus docker_images/cpp/ --cache-from $(DOCKER_USER)/cplusplus

build-docker-cpp:
	docker build -t $(DOCKER_USER)/cplusplus docker_images/cpp/ --cache-from $(DOCKER_USER)/cplusplus

run-interactive-cpp:
	docker run --rm -it --name cppcontainer $(DOCKER_USER)/cplusplus bash

pull-cpp:
	docker pull $(DOCKER_USER)/cplusplus

tag-cpp:
	docker tag $(DOCKER_USER)/cplusplus cplusplus

push-cpp:
	docker push $(DOCKER_USER)/cplusplus

## PL Image

build-pl:
	docker build -t pl docker_images/pl/ --cache-from $(DOCKER_USER)/pl

build-docker-pl:
	docker build -t $(DOCKER_USER)/pl docker_images/pl/ --cache-from $(DOCKER_USER)/pl

run-interactive-pl:
	docker run --rm -it --name plcontainer $(DOCKER_USER)/pl bash

pull-pl:
	docker pull $(DOCKER_USER)/pl

tag-pl:
	docker tag $(DOCKER_USER)/pl pl

push-pl:
	docker push $(DOCKER_USER)/pl

## OS Image

## Java Image

## Big Data Image


# React gh-pages commands:

build-react:
	rm -r static && \
	rm precache-manifest* && \
	cd docker_for_edu_site && \
	npm run build && \
	cp favicon.ico build && \
	cp -r build/* .. && \
	cd ..

start-local:
	cd docker_for_edu_site && \
	npm start


# Tests

test-pl:
	nose2 -Cvs tests test_docker-pl

test-cpp:
	nose2 -Cvs tests test_docker-cpp

test:
	nose2 -Cv tests
