FROM gcc

ENV HOME /home
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update
#RUN apt-get -yqq upgrade
RUN apt-get -yqq install apt-utils build-essential curl gnupg git
RUN apt-get -yqq install vim nano gedit

# copy our code
COPY run_sample.sh /home/
ADD samples /home/samples

# Set working dir
WORKDIR /home

# run cmd
CMD ["./run_sample.sh"]