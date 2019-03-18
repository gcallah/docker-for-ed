FROM quickstart

ENV HOME /home
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -y install spark-core spark-master spark-worker spark-history-server spark-python

# Set working dir
WORKDIR /home

# copy necessary code
COPY Makefile .

