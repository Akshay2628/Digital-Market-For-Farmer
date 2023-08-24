## remote repo connection

- local repository
  - the one which resides on the users machine
- remote repository
  - the one which resides on the remote server (shared server) like GitHub or GitLab
  - also known as shared repository

```bash

# get the info of remote repository
> git remote -v

# link the remote repository with local one
# > git remote add <alias> <remote repository url>
> git remote add origin git@github.com:<username>/test-dac-repo.git

# share the changes from local to remote
# > git push <alias> <branch>
> git push origin main

# u: upstream
# once set, by default git will use the origin as alias and main as the branch
> git push -u origin main

# first time setup (get all the changes from server to local)
> git clone <url>

# get all the changes from server to local (all the times)
> git pull

```




## installation

```bash

# windows
# download gitbash from
# https://git-scm.com/downloads

# linux - debian based - Ubuntu
> sudo apt-get install git

# linux - red hat based - Centos / RH / Fedora
> sudo yum install git

# macOS
# by default available
# to update the git version use
# first install brew from Homebrew
> brew install git

```

```bash

# initializes a git repository
> git init

# set the global settings
> git config --global --list
> git config --global user.name ""
> git config --global user.email ""

# to verify the settings
> cat ~/.gitconfig

# get the status of all the files and directories within the working directory
> git status
> git status -s

# status options
# ??: this file is not yet added to the repository (untracked file)
# A : the file is now present in the staging area
#  M: the file is modified but it is not not yet staged (not yet added to the staging area)
# M : the file is modified and it is present in the staging area
# UU: the file has got conflicts


# add the file(s) in the staging area
> git add <file name>

# add all the updated file(s) or directories
> git add .

# commit all the changes present in the staging area
> git commit -m <commit message>

# get the logs of all commits
> git log

# get the difference between the contents of a file from working directory and last recorded version from repository
> git diff <file name>

# get the last (latest) version from repository and replace it with the working directory
> git checkout <file name>

# please please please do not execute this command if you are not sure what you are doing
# please execute this command on your own risk
# get all the changes out from stage area and move them to the working directory (changes will persist)
> git reset

# please please please do not execute this command if you are not sure what you are doing
# please execute this command on your own risk
# get all the changes out from stage area and discard them
> git reset --hard

```







## branching

```bash

# by default git always will create a new branch (along with the first commit) named main branch
# the main branch
# - should contain the latest code
# - should contain working code
# - should contain bug-free code
# - should contain crash-free code
# - should contain stable code

# current branch
# - which is used to create new versions
# - all the commits will go to this branch

# get the current branch
> git status

# get the list of branches
# the branch which has * in front of the name is the current branch
> git branch

# create a new branch
> git branch <branch name>

# checkout new branch
> git checkout <branch name>

# merge changes from other branch
# merges all the changes from other branch to the current branch
> git merge <other branch name>

# delete a branch
> git branch -d <branch name>

# get the logs in better way
> git log --oneline --graph --color

# create a new branch and checkout immediately
> git checkout -b <new branch name>

```

## merge conflict

- when two branches have added / updated the same file on the same line then the merge will generate a conflict
- a scenario where git does not understand how to merge the changes
- and gives the control in users hand
- the merge conflict(s) must be handled manually




## node - general

```bash

# install yarn
> sudo npm install -g yarn nodemon

# add a new package
# > npm install express
> yarn add express

# install all the packages from package.json
# > npm install
> yarn

```

## express

```bash

# install express and required dependencies
> yarn add express cors mysql2

```

## react

```bash

# create react app
> npx create-react-app products

# install required modules
> cd products
> yarn add axios

```

## aws

```bash

# go to EC2 and create an EC2 instance (VM)
# please use the following settings

# region: mumbai
# click on the Launch Instances (you may find it on right top corner)
# name: test-server
# AMI: Ubuntu Server 22.04 LTS
# instance type: t2.micro
# key-pair settings
# - Key pair name: dac-test
# - Key pair type: RSA
# - Private key file format: .pem
# when you create this pem file it will be downloaded in ~/Downloads
# click the Launch button and wait for some time :)

```

### connect to the AWS EC2 instance

```bash

# open your terminal

# change the permissions of pem file
> cd ~/Downloads
> chmod 400 dac-test.pem

# from AWS management console, grab the public ip address of your instance

# connect to the instance
# > ssh -i dac-test.pem ubuntu@13.233.164.71
> ssh -i dac-test.pem ubuntu@<public ip address>

# this command will connect to the server

# update the aptitude (package manager for ubuntu)
> sudo apt-get update

# install required applications
> sudo apt-get install mysql-server apache2

# install node 16
> curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
> sudo apt-get update
> sudo apt-get install nodejs

```

## mysql configuration

```bash

# please execute these commands on server (EC2 instance)

# start mysql with root privileges
> sudo mysql

# reset the root user password
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> FLUSH PRIVILEGES;
mysql> exit;

# now login with root user
> mysql -u root -p

```

## express server configuration

```bash

# please execute these commands on your local machine

# on your machine create an archive of express server
> cd <express server directory parent>

# this command should show you the server directory
> ls
> tar -cf server.tar server

# upload the server.tar to the ec2 instance
# > scp -i ~/Downloads/dac-test.pem server.tar ubuntu@13.234.20.103:~/
> scp -i ~/Downloads/dac-test.pem server.tar ubuntu@<public ip>:~/

# please execute these commands on ec2 instance
> cd ~

# this command should show you the server.tar file
> ls

# extract the server.tar to get the express code
> tar -xf server.tar
> cd server

# install a package manager for running express continuously
> sudo npm install -g pm2

# please make sure that you are in the server directory
> cd ~/server

# start the express server
> pm2 start server.js

# get the status of server
> pm2 list

# restart the server
> pm2 restart <server index>

# unblock or open the port 4000 for express server
# select the ec2 instance from the ec2 dashboard
# select the security tab
# click the security groups (this is nothing but security which will open the required ports -> port filters)
# click the button Edit inbound rules (you may find it on the right side)
# add rule
# - port range: 4000
# - source: anywhere/ip4
# add rule
# - port range: 80
# - source: anywhere/ip4
# click save rules

```

## react application

```bash

# please execute these commands on your local machine

# go to the react application source code and change the server url to the public ip address of your ec2 instance

# build your react app
> yarn build

# go to the build directory
> cd build

# archive the files
> tar -cf react.tar *

# upload the react.tar to the server
# > scp -i ~/Downloads/dac-test.pem react.tar ubuntu@13.234.20.103:~/
> scp -i ~/Downloads/dac-test.pem react.tar ubuntu@<public ip address>:~/

# please execute these commands on ec2 instance
> cd ~/

# please make sure that you can see the react.tar file
> ls

# go to the apache htdocs directory
> cd /var/www/html

# delete all files from this directory
> sudo rm -rf *

# move the file react.tar from home directory to the current directory
> sudo mv ~/react.tar .

# unarchive the react.tar file
> sudo tar -xf react.tar

```





## images

```bash

# check if docker is running
> sudo systemctl status dockerd

# get the list of images
> docker image ls

# remove an image from disk
# > docker image rm <image name> or <image id>
> docker image rm alpine

# download an image from a docker registry
# > docker image pull <image name>
> docker image pull alpine

# get details or information of selected image
# > docker image inspect <image name or id>
> docker image inspect alpine

```

## image required

- alpine
- node
- apache (httpd)
- nginx
- mysql
- ubuntu

## custom images

- install vscode plugin
  - https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

```bash

# create a file named Dockerfile
# add the following commands
FROM httpd
COPY ./index.html /usr/local/apache2/htdocs/

# build docker image
# > docker image build -t <image name> <location where Dockerfile exists>
> docker image build -t myimage .

```




## container

```bash

# get the list of running container
> docker container ls

# get the list of all container (including running or stopped)
> docker container ls -a

# remove a container
> docker container rm <container id or name>

# remove a container forcefully
> docker container rm --force <container id or name>

# stop the running container
> docker container stop <container id or name>

# create a new container
> docker container create <image name or id>

# create a new container with a name
> docker container create --name <container name> <image name or id>

# start the container
> docker container start <container id or name>

# run a new container
> docker container run <image name or id>

# run a new container with name
> docker container run --name <container name> <image name or id>

# run a new container with port forwarding
> docker container run -itd --name <container name> -p <machine port>:<container port> <image name or id>

# execute command inside a container
> docker container exec <container id or name> <command>

# get the terminal of running container
> docker container exec -it <container or name> bash or sh

# get the container logs
> docker container logs -f <container id or name>

```

## examples

```bash

# create httpd container
> docker container create httpd

# create httpd container with name
> docker container create --name myhttpd httpd

# run a new container with name in attached mode
> docker container run --name myhttpd httpd

# run a new container with name in detached mode (-d)
> docker container run -d --name myhttpd httpd

# run a new container with name in detached mode (-d) with interactive (-i) and teletype terminal (-t) parameters
> docker container run -d -i -t --name myhttpd httpd
> docker container run -itd --name myhttpd httpd

# run a new httpd container with port forwarding from 9001 to 80
> docker container run -itd --name myhttpd -p 9001:80 httpd

# run a new mysql container with
# -itd
# --name:
# -p: port forwarding
# -e: set an environment variable
> docker container run -itd --name mysql -p 7005:3306 -e MYSQL_ROOT_PASSWORD=root mysql

# first go inside the container to deal with mysql running inside the container
> docker container exec -it mysql bash
> mysql -u root -p

# check if a port is already in use
# > lsof -i :<port number>
> lsof -i :3306

# stop the mysql process
> sudo systemctl stop mysql

```

## native applications

- application which is platform specific
- every platform has its own executable file format
  - macOS: Mach-O
  - linux: ELF -> Executable and Linkable File Format
  - windows: PE/COFF -> Portable Executable Common Object File Format





  ## docker swarm

```bash

# check if the docker is running in swarm mode
# and verify the swarm status: inactive or active
> docker info
> docker info | grep Swarm

# create a docker swarm (cluster)
> docker swarm init

# add a worker node in the swarm
> docker swarm join

# create a docker swarm (cluster) using ip address
# > docker swarm init --advertise-ip <ip address>

# stop the swarm
> docker swarm leave --force

# generate token for manager
> docker swarm join-token manager

# generate token for worker
> docker swarm join-token worker

```

### node

```bash

# get the list of nodes
> docker node ls

# get the details of selected node
> docker node inspect <node id>

# remove node
> docker node rm <node id>

# promote a worker as a manager
> docker node promote <worker id>

# promote a worker as a manager
> docker node demote <manager id>

```

## service

```bash

# get the list of running services
> docker service ls

# create a service
# > docker service create --name <service name> <image name>
> docker service create --name myservice httpd

# create a service with multiple containers (desired count)
> docker service create --name myservice --replicas 5 httpd

# create a service with port forwarding
> docker service create --name myservice --replicas 5 -p 9090:80 httpd


# get details of selected service
# > docker service inspect <service name>
> docker service inspect myservice

# get the containers created by selected service
# > docker service ps <service name>
> docker service ps myservice

# remove the service
# > docker service rm <service name>
> docker service rm myservice

# scale the containers
# > docker service scale <service name>=<new desired count>

# increasing the containers (scale out)
> docker service scale myservice=10

# reducing the containers (scale in)
> docker service scale myservice=2

```





## Pod

- create a file named pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod3
  labels:
    type: frontend
spec:
  containers:
    - name: container1
      image: httpd
      ports:
        - containerPort: 80
          name: http-port
```

```bash

# create pod
> kubectl create -f pod1.yml

```

## ReplicaSet

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: rs1
spec:
  replicas: 5
  selector:
    matchLabels:
      type: frontend
  template:
    metadata:
      labels:
        type: frontend
    spec:
      containers:
        - name: container1
          image: httpd
          ports:
            - containerPort: 80
              name: http-port
```

```bash

# create replica set
> kubectl create -f rs1.yml

# describe rs
> kubectl describe replicaset rs1

# delete rs
> kubectl delete replicaset rs1

```

## service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myservice
spec:
  type: NodePort
  selector:
    type: frontend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```

```bash

# create service
> kubectl create -f service1.yml

# describe service
> kubectl describe service myservice

# expose the service to access outside the minikube
> minikube service myservice

# delete service
> kubectl delete service myservice

```





# selenium

```bash

# download browser specific web driver
# the following url will download web driver for chrome
> https://chromedriver.storage.googleapis.com/index.html?path=114.0.5735.90/

# you may find the documentation here
> https://www.selenium.dev/selenium/docs/api/javascript/index.html

# install required module
> yarn add selenium-webdriver

# copy the webdriver in the testing directory


```







## jenkins

```bash

# install on ubuntu
>  curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

>  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null

> sudo apt-get update
> sudo apt-get install fontconfig openjdk-11-jre
> sudo apt-get install jenkins

# install jenkins on macOS
> brew install jenkins-lts

# browse jenkins on
> http://localhost:8080

```

## create token for docker hub login

```bash

# login to the docker hub account
# go to the Account Settings
# go to the Security
# create an access token
# once generated, copy the token (or it wont be visible again)


```

# commands

```bash

# create a docker image
> docker image build -t pythoncpp/mytestimage .

# login with docker
> echo <access token> | docker login -u <account name> --password-stdin

# push the image to docker hub
> docker image push pythoncpp/mytestimage#

# restart the service
> docker service update --image pythoncpp/mytestimage --force myapp

```

- email: amit.kulkarni@sunbeaminfo.com
- mobile: 7709859986 (3am to 6am)

# my token 

dckr_pat_C-z973FCsS3kHzhuIEzA9q42mCM