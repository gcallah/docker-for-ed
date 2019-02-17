FROM ubuntu:18.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update
RUN apt-get -yqq install build-essential tree curl gnupg git

# Install GCC and GDB
RUN apt-get -yqq install gcc gdb

# Install Python3.6+
RUN apt-get -yqq install python3

# Install Common Lisp
RUN apt-get -yqq install sbcl

# Install Haskel
RUN apt-get -yqq install haskell-platform

# Install terminal-based editors
RUN apt-get -yqq install vim nano emacs

# Set working dir
WORKDIR /home

# copy necessary code
COPY VERSION .
COPY Makefile .

# run cmd
CMD ["ls"]