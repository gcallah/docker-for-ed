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

# Install MIT-Scheme
RUN apt-get -yqq install mit-scheme

# Install terminal-based editors
RUN apt-get -yqq install vim nano

# Set working dir
WORKDIR /root

# copy necessary code
COPY run_sample.sh .
COPY .welcome .
COPY script.sh .
COPY VERSION .
COPY Makefile .
ADD samples ./samples

RUN chmod 755 run_sample.sh
RUN /bin/bash script.sh

# run cmd
CMD ["./run_sample.sh"]
