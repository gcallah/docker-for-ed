build-java8-image:
	docker build -f Dockerfile -t gcallah/java .

run-interactive-java:
	- docker pull gcallah/java
	- docker run --rm -it -v `pwd`:/home --name javacontainer gcallah/java bash

compile-sample-HelloWorld:
	docker run --rm -v `pwd`/Samples:/home gcallah/java javac Test.java

run-sample-HelloWorld:
	docker run --rm -v `pwd`/Samples:/home gcallah/java java Test

copy-to-container:
	docker cp ./ javacontainer:/home/HW

copy-from-container:
	docker cp javacontainer:/home/HW ./

#windows support

run-interactive-java-windows:
	- docker pull gcallah/java
	- winpty docker run --rm -it -v `pwd`:/home --name javacontainer gcallah/java bash

compile-sample-HelloWorld:
	winpty docker run --rm -v `pwd`/Samples:/home gcallah/java javac Test.java

run-sample-HelloWorld:
	winpty docker run --rm -v `pwd`/Samples:/home gcallah/java java Test


help:
	@echo
	@printf "\t\t\t\e[1mInstructions\e[0m (for initial setup only)\n\n"
	@echo "- Create a directory 'java-class' (or any other name)."
	@echo "- Create a directory 'HW' (have to be called 'HW')."
	@echo "- Change to directory 'HW'."
	@echo "- Copy Test.java from ./Samples to HW directory."
	@echo
	@printf "\t\t\t\e[1mCommands\e[0m\n\n"
	@echo "\e[1m> make instructions \e[0m\t- to print basic instructions (run from inside container)."
	@echo "\e[1m> make build-java8-image \e[0m\t- builds a java8 image in the local docker repository. "
	@echo "\e[1m> make compile-sample-HelloWorld (-windows "for windows system") \e[0m\t- compiles a sample java8 source file to a .class file."
	@echo "\e[1m> make run-sample-HelloWorld (-windows "for windows system") \e[0m\t- runs a sample java8 file and outputs the result to stdout."
	@echo "\e[1m> make run-interactive-java (-windows "for windows system") \e[0m\t- runs a shell terminal in interactive mode."
	@echo "\e[1m> make copy-to-container \e[0m\t- copy local user files to the java container"
	@echo "\e[1m> make copy-from-container \e[0m\t- copy files to the local directory from java container"



