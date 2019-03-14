build-java8-image:
	docker build -f Dockerfile -t demo/oracle-java:8 .

compile-sample-HelloWorld:
	docker run --rm -v `pwd`:/home demo/oracle-java:8 javac Main.java

run-sample-HelloWorld:
	docker run --rm -v `pwd`:/home demo/oracle-java:8 java Main

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
	@echo "\e[1m> make build-java8-image \e[0m\t- builds a java8 image in the local docker repository."
	@echo "\e[1m> make compile-sample-HelloWorld \e[0m\t- compiles a sample java8 source file to a .class file."
	@echo "\e[1m> make compile-sample-HelloWorld \e[0m\t- compiles a sample java8 source file to a .class file."
