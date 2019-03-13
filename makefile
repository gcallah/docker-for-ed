# Docker commands:

build-images: build-cpp build-pl

build-cpp:
	docker build -t cplusplus docker_images/cpp/

build-docker-cpp:
	docker build -t pyoey/cplusplus docker_images/cpp/

run-interactive-cpp:
	docker run --rm -it --name cppcontainer pyoey/cplusplus bash

push-cpp:
	docker push pyoey/cplusplus

build-pl:
	docker build -t pl docker_images/pl/

build-docker-pl:
	docker build -t pyoey/pl docker_images/pl/

run-interactive-pl:
	docker run --rm -it --name plcontainer pyoey/pl bash

push-pl:
	docker push pyoey/pl


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

test-docker-pl:
	pytest -v tests/test_docker-pl.py

test-cpp:
	pytest -v tests/test_docker-cpp.py

run-all-tests:
	pytest -v tests
