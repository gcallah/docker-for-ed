FROM gcc

ENV HOME /home
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update
#RUN apt-get -yqq upgrade
RUN apt-get -yqq install apt-utils build-essential
RUN apt-get -yqq install curl gnupg git gdb
RUN apt-get -yqq install vim nano gedit
RUN apt-get -yqq install emacs24

# Set working dir
WORKDIR /home

# copy our code
COPY run_sample.sh .
COPY VERSION .
COPY .bashrc .
ADD samples ./samples

RUN chmod 755 run_sample.sh

# run cmd
CMD ["./run_sample.sh"]