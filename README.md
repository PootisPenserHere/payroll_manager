# Payroll manager

#### This is a simple system to keep a record of employees where they will peform differnt tasks within the company and will be paid accordingly in a montly bases.

## Getting started

### Pre requisites
##### Installing docker
#
```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update

apt-cache policy docker-ce

sudo apt-get install -y docker-ce
```

##### Installing docker compose
#
```sh
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

### Starting up
##### To initialize the system it can be run with docker compose which will create the service for apache + php and the mysql instance used by the service
#
```sh
sudo docker-compose up --build -d
```

##### Note: if the service is run without docker it'll be necesary to adjust the connection parameters in the file
#
```
api-payroll/src/settings.php
```
##### The login page can be accessed at
#
```
http://localhost:8085/public/html/login.php
```

###### Note: To access the system the user is 'sloth' while the password is 'slothness'

## For more detailed documentation about the different components:
 [api-payroll](https://github.com/PootisPenserHere/payroll_manager/blob/master/api-payroll/README.md)
 
 [database](https://github.com/PootisPenserHere/payroll_manager/blob/master/database/README.md)

### Data volumes

### Considerations when calculating the salary
