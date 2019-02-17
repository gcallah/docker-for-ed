build-image:
	docker build -t cplusplus docker_images/cpp/

build-docker-image:
	docker build -t pyoey/cplusplus docker_images/cpp/

run-interactive:
	docker run --rm -it -v `pwd`/HW:/home/HW --name cppcontainer cplusplus bash

run-sample:
	docker run --rm cplusplus
