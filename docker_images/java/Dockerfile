FROM  phusion/baseimage:0.11

RUN apt-get update && apt-get install -y --force-yes openjdk-8-jdk

#Install some editors and essentials
RUN apt-get -yqq install vim nano make emacs

#Clean up Apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

#Setting the working directory
WORKDIR /home

COPY ./Samples/Test.class ./

RUN java ./Samples/Test.class

#baseimage's init system
CMD ["/sbin/my_init"]
