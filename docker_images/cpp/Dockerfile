FROM gcc

ENV HOME /home
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update
#RUN apt-get -yqq upgrade
RUN apt-get -yqq install build-essential tree
RUN apt-get -yqq install curl gnupg git gdb
RUN apt-get -yqq install vim nano emacs24

# Set working dir
WORKDIR /home

# copy necessary code
COPY run_sample.sh .
COPY VERSION .
COPY .bashrc .
COPY .bash_profile .
COPY Makefile .
ADD samples ./samples

RUN chmod 755 run_sample.sh

# run cmd
CMD ["./run_sample.sh"]