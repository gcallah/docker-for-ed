FROM phusion/baseimage:0.11

COPY requirements.txt /requirements.txt

RUN apt-get update

RUN apt-get install -y python3-pip vim emacs nano git build-essential bash

RUN pip3 install --upgrade pip

RUN pip3 install -r requirements.txt

# run cmd
CMD ["/sbin/my_init"]
