FROM ubuntu:trusty

# update and install deps
RUN apt-get update
RUN apt-get install -y python python-pip python-dev
RUN apt-get install -y nginx supervisor curl git
RUN pip install uwsgi Flask


EXPOSE 80

# CMD 