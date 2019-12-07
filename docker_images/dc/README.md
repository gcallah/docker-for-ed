
**GOAL**

To setup a basic prototype for distributed computing in docker. 

**INSTALLATION**

- Server side (src/server/):

  - Make sure that your 'src/server/' is up and running, either locally (for test purpose), 
     or if its deployed elsewhere, then the hostname/IP and Port is provided in the environment 
     variables as under `$DC_HOST` and `$DC_PORT`.

     (refer next major point on 'Client side' for this script)

  - Do ensure that for running the server, you need to install mongoDB. Refer to following: 
    [install_mongo guide](https://github.com/arcolife/dockerComp/blob/master/src/server/install_mongo)
    and then set the env variables `U_DB, U_USER and U_PASS` giving the same values to them as the
    db name, it's user and password set while setting up mongoDB.


  - Ensure that you've installed deps from `dockerComp/src/server/requirements.txt`

  - To run the src/server, open up a terminal, go to dockerComp/src/server/ and run ```$ ./start```
    This starts the server locally on your machine.


- Client side (src/client/):

  - Note: For server side deployement (i.e., the server that basically is responsible for distributing data 
      to clients), It has to be deployed somewhere and it's IP has to be provided in your `configuration` file. 
      And then you may distribute the script `installer.sh` alongwith the `configuration` to the clients. 


  - Download [This Script](https://github.com/arcolife/dockerComp/raw/master/installer.sh) and run 

  ```$ ./installer.sh``` [configure your Server location for this script, as under `$DC_HOST` & `$DC_PORT` ]

  - Once installed, the daemon output would lie in `$HOME/dockerComp/src/client/scripts/nohup.out` and
    the daemon itself, would like in  `$HOME/dockerComp/src/client/scripts/slave_manager`. To kill the
    daemon, you need to run `$ kill -9 $(ps -e | grep slave_manager | awk -F' ' '{print $1}')`

Should you need to remove all traces of dockerComp from your machine, just run the script 'cleanup`
included in the source code of this project root.


**FEATURES**

- Can be used for:
      - Image Processing
      - General Data Analysis
      - Scientific Computing
      - CrowdSourcing projects.


**TESTS**

- From client side:
  - although the default connection establishment test is included with install scripts;
    run ```$ src/client/scripts/test_server_conn``` (make sure env vars `DC_HOST` and `DC_PORT` are set)

- From server side:
  - TBD

- Workloads:
  - Currently a simple task. TBD.


**WORKFLOW**

1. Server

   - Dashboard to Manage:
     - No. of Clients (and # of containers per client)
     - Resources allocated to the containers
   
   - Master app  that manages data sent to each client and checks for integrity.

2. Client

   - Installation of Docker
   - Starting Containers
   - Installation of Application inside the Container
   - Connection Establishment with the Server.
   - Scripts for the computation
   - Error Reporting


**REFERENCES**

  https://github.com/arcolife/dockerComp

