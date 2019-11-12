FROM ubuntu:latest

RUN apk update && apk add\ 
    build-base\
    qemu-system-i386
# RUN cd qemu && ./configure --disable-kvm --target-list="i386-softmmu x86_64-softmmu" --python=/usr/bin/python2.7 && make && make install && cd ..

CMD cd /home/xv6 && make qemu && ./kernel 