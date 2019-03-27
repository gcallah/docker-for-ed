FROM alpine

ENV HOME /home

RUN apk update && \
    apk upgrade && \
    apk --update add \
    gcc \
    g++ \
    gdb \
    build-base \
    cmake \
    bash \
    libstdc++ && \
    rm -rf /var/cache/apk/*

RUN apk add vim nano emacs

# Set working dir
WORKDIR /home

# copy necessary code
COPY run_sample.sh .
COPY .bashrc .
COPY .bash_profile .
COPY Makefile .
ADD samples ./samples

RUN chmod 755 run_sample.sh

# run cmd
CMD ["./run_sample.sh"]
