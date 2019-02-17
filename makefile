build-cpp:
	docker build -t cplusplus docker_images/cpp/

build-docker-cpp:
	docker build -t pyoey/cplusplus docker_images/cpp/

push-cpp:
	docker push pyoey/cplusplus

build-pl:
	docker build -t pl docker_images/pl/

build-docker-cpl:
	docker build -t pyoey/pl docker_images/pl/
