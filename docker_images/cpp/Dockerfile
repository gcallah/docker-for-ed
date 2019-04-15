FROM alpine

ENV ENV="/etc/profile"

RUN apk update && \
    apk upgrade && \
    apk --update add \
    gcc \
    g++ \
    gdb \
    make \
    bash \
    clang && \
    rm -rf /var/cache/apk/*

RUN apk add vim nano emacs

# Set working dir
WORKDIR /home

# copy necessary code
COPY run_sample.sh .
COPY .ashrc .
COPY makefile .
ADD samples ./samples

RUN chmod 755 run_sample.sh
RUN cat .ashrc >> "$ENV"

# run cmd
CMD ["./run_sample.sh"]
