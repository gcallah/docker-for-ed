DOCKER_USER = gcallah


# Docker commands:

build-images: build-cpp build-pl build-java

build-docker-images: build-docker-cpp build-docker-pl build-docker-java

pull-images: pull-cpp pull-pl pull-java

tag-images: tag-cpp tag-pl tag-java

push-images: push-cpp push-pl push-java


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
	docker pull $(DOCKER_USER)/cplusplus || true

tag-cpp:
	docker tag $(DOCKER_USER)/cplusplus cplusplus || true

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
	docker pull $(DOCKER_USER)/pl || true

tag-pl:
	docker tag $(DOCKER_USER)/pl pl || true

push-pl:
	docker push $(DOCKER_USER)/pl

## OS Image

## Java Image

build-java:
	docker build -t java docker_images/java/ --cache-from $(DOCKER_USER)/java

build-docker-java:
	docker build -t $(DOCKER_USER)/java docker_images/java/ --cache-from $(DOCKER_USER)/java

run-interactive-java:
	docker run --rm -it --name javacontainer $(DOCKER_USER)/java bash

pull-java:
	docker pull $(DOCKER_USER)/java || true

tag-java:
	docker tag $(DOCKER_USER)/java java || true

push-java:
	docker push $(DOCKER_USER)/java

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
	pytest -v tests/test_docker-pl.py

test-cpp:
	pytest -v tests/test_docker-cpp.py

test-os:
	pytest -v tests/test_docker-os.py

test-java:
	pytest -v tests/test_docker-java.py

tests: test-cpp test-os test-pl test-java
	nose2 -Cv tests
