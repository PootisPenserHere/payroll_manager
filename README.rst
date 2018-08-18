=================
 Payroll manager
=================

|codebuild|

This is a simple system to keep a record of employees where they will perform different tasks within the company and will be paid accordingly in a monthly bases.

.. contents::

Getting started
-----------------

The system requires the following:
 - Ubuntu 16.04
 - php 7.0
 - composer
 - docker
 - docker-compose
 - mysql 5.7
 
Installation
-----------------
 
Alternatively to installing all the packages and configuring the server it's possible to start up an instance of the system with docker-compose

To install docker
.. code-block:: bash

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

    sudo apt-get update

    apt-cache policy docker-ce

    sudo apt-get install -y docker-ce

To install docker compose
.. code-block:: bash
    sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

    sudo chmod +x /usr/local/bin/docker-compose

And finally the containers can be initialized by running
.. code-block:: bash
   sudo docker-compose up --build -d
    
Sign in
-----------------

The login page can be accessed at **http://localhost:8085/public/html/login.php**

To access the platform the user is **sloth** and the pasword **slothness**

Further reading
-----------------
To further read about the api and it's front-end
`api-payroll <https://github.com/PootisPenserHere/payroll_manager/blob/master/api-payroll/README.rst>`_

More about the database `database <https://github.com/PootisPenserHere/payroll_manager/blob/master/database/README.rst>`_

 
Data volumes
-----------------
Since the application is designed to run within containers a number of volumes has been created to persist the data, they can be found in the volumes directory on the root of the project

.. |codebuild| image:: https://s3.amazonaws.com/codefactory-us-east-1-prod-default-build-badges/passing.svg
    :target: https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiWm42eW80VzA2OXRTc2xIMXErZ1hlS1RpNnFCaDVMWENqSSsyU2x3dUpReEpCRUtaZGRmbklYaFN0anVEWW9NaGYvQ21PNk9tR25rZGtZMjNvR1ArbGdVPSIsIml2UGFyYW1ldGVyU3BlYyI6IjVXYjl3TWZnUVQ1MFZDQ0kiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master
    :alt: Build status of the master branch on amazon codebuild
