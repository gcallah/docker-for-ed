FROM ubuntu:latest

RUN apt-get -qq update

RUN apt-get install -y git build-essential gdb gcc-multilib python2.7

RUN git clone https://github.com/qemu/qemu.git

RUN apt-get install -y libsdl1.2-dev libtool-bin libglib2.0-dev libz-dev libpixman-1-dev

RUN cd qemu && ./configure --disable-kvm --target-list="i386-softmmu x86_64-softmmu" --python=/usr/bin/python2.7 && make && make install && cd ..

ADD xv6-public xv6

WORKDIR xv6

CMD cd /xv6 && make qemu && ./kernel