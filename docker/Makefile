run-interactive:
	docker run --rm -it --name cppcontainer cplusplus bash

run-sample:
	docker run --rm cplusplus

copy-to-container:
	docker cp HW cppcontainer:/home/HW

copy-from-container:
	docker cp cppcontainer:/home/HW .

save-hw:
	docker cp cppcontainer:/home/HW .

instructions:
	@echo
	@echo "- Create a directory 'cppclass' (can be called anything) for this course."
	@echo "- Create a directory 'HW' (have to be called 'HW')."
	@echo "- Run commands inferred from 'make help' in the cppclass directory always."
	@echo

help:
	@echo "\nRun below commands from 'cppclass' directory"
	@echo
	@echo "\e[1m> make instructions \e[0m\t\t- to print basic instructions"
	@echo "\e[1m> make run-interactive \e[0m\t\t- to run docker in interactive mode (recommended)"
	@echo "\e[1m> make run-sample \e[0m\t\t- to run sample hello world C++ code."
	@echo "\e[1m> make copy-to-container \e[0m\t- to copy 'HW' folder to the docker container."
	@echo "\e[1m> make copy-from-container \e[0m\t- to copy/save the 'HW' folder to local computer."
	@echo "\e[1m> make save-hw \e[0m\t\t\t- (this is same as 'make copy-from-container')"