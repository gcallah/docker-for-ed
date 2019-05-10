run-interactive:
	- docker pull gcallah/pl
	- docker run --rm -it -v `pwd`/HW:/home/HW --name plcontainer gcallah/pl sh

run-sample:
	docker run --rm cplusplus

help:
	@echo
	@printf "\t\t\t\e[1mInstructions\e[0m (for initial setup only)\n\n"
	@echo "- Create a directory 'plclass' (can be called anything) for this course."
	@echo "- Create a directory 'HW' (have to be called 'HW')."
	@echo
	@printf "\t\t\t\e[1mCommands\e[0m\n\n"
	@echo "- help: to print basic instructions (run from inside the container)."
	@echo "- make run-interactive: to run docker in interactive mode (run from plclass dir, outside the container)."
	@echo "- make run-sample: to run sample hello world C++ code (run from plclass dir, outside the container)."
	@echo "- exit: to exit from a running docker container (run from inside the container)."
	@echo
