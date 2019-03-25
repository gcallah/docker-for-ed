FROM ubuntu:18.04

ADD docker_files/cdh_installer.sh /tmp/cdh_installer.sh
ADD docker_files/install_cloudera_repositories.sh /tmp/install_cloudera_repositories.sh

ADD docker_files/cdh_startup_script.sh /usr/bin/cdh_startup_script.sh

ENV TERM xterm

RUN \
    chmod +x /tmp/cdh_installer.sh && \
    chmod +x /usr/bin/cdh_startup_script.sh && \
    bash /tmp/cdh_installer.sh


# private and public mapping
EXPOSE 2181:2181
EXPOSE 8020:8020
EXPOSE 8888:8888
EXPOSE 11000:11000
EXPOSE 11443:11443
EXPOSE 9090:9090
EXPOSE 8088:8088
EXPOSE 19888:19888
EXPOSE 9092:9092
EXPOSE 8983:8983
EXPOSE 16000:16000
EXPOSE 16001:16001
EXPOSE 42222:22
EXPOSE 8042:8042
EXPOSE 60010:60010

# For Spark
EXPOSE 8080:8080
EXPOSE 7077:7077

# Define default command.
CMD ["cdh_startup_script.sh"]


