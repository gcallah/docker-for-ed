DH_ACCOUNT = gcallah
CONTAINER = cplusplus

container: Dockerfile 
	docker build -t $(DH_ACCOUNT)/$(CONTAINER) .
	
run-interactive:
	- docker pull gcallah/dc
	- docker run --rm -it -v `pwd`/HW:/home/HW --name dccontainer gcallah/dc sh

run-sample:
	docker run --rm distributedcomputing

copy-to-container:
	docker cp HW dccontainer:/home/HW

copy-from-container:
	docker cp dccontainer:/home/HW .

save-hw:
	docker cp dccontainer:/home/HW .

help:
	@echo
	@printf "\t\t\t\e[1mInstructions\e[0m (for initial setup only)\n\n"
	@echo "- Create a directory 'dcclass' (can be called anything) for this course."
	@echo "- Create a directory 'HW' (have to be called 'HW')."
	@echo
	@printf "\t\t\t\e[1mCommands\e[0m\n\n"
	@echo "\e[1m> make instructions \e[0m\t- to print basic instructions (run from inside container)."
	@echo "\e[1m> make run-interactive \e[0m\t- to run docker in interactive mode (run from dcclass dir, outside container)."
	@echo "\e[1m> make run-sample \e[0m\t- to run sample hello world C++ code (run from dcclass dir, outside container)."
	@#@echo "\e[1m> make copy-to-container \e[0m\t- to copy 'HW' folder to the docker container (run from pbdaclass dir, outside container)."
	@#@echo "\e[1m> make copy-from-container \e[0m\t- to copy/save the 'HW' folder to local computer (run from pbdaclass dir, outside container)."
	@#@echo "\e[1m> make save-hw \e[0m\t\t\t- (this is same as 'make copy-from-container')"
	@echo