FROM python:3.6-alpine3.9

ENV SCHEME_VERSION 9.2

RUN cd /tmp \
    && apk --no-cache --update --virtual build-dependencies add build-base m4 \
    && rm -f /var/cache/apk/* \
    && wget http://ftp.gnu.org/gnu/mit-scheme/stable.pkg/${SCHEME_VERSION}/mit-scheme-${SCHEME_VERSION}-x86-64.tar.gz \
    && tar zxvf mit-scheme-${SCHEME_VERSION}-x86-64.tar.gz \
    && rm mit-scheme-${SCHEME_VERSION}-x86-64.tar.gz \
    && cd mit-scheme-${SCHEME_VERSION}/src \
    && ./configure \
    && make compile-microcode \
    && make install \
    && cd /tmp \
    && rm -rf cd mit-scheme-${SCHEME_VERSION} \
    && apk del build-dependencies

RUN apk update && \
    apk upgrade && \
    apk --update add \
    g++ \
    bash \
    ghc \
    vim \
    nano \
    emacs \
    rm -rf /var/cache/apk/*

# Set working dir
WORKDIR /root

# copy necessary code
COPY run_sample.sh .
COPY .welcome .
COPY script.sh .
COPY Makefile .
ADD samples ./samples

RUN chmod 755 run_sample.sh
RUN bash script.sh

# run cmd
CMD ["./run_sample.sh"]
