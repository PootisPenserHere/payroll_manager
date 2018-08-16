================
``The database``
================

.. contents::

About the container
--------------------

The database container is created in two stages to bypass some limitations with docker, firstly a new image will be created based on the Dockerfile which will be based on mysql 5.7 and it'll be passed the .sql scripts to initialize the database as well as a config file to configure the port that will be exposed.

Initializing
-------------
When the database is being created as an image it'll take all the scripts in the **/docker-entrypoint-initdb.d** directory and execute them in alphabetical order which will result in the database with its tables and initial data being created.

Accession
----------
The newly created container will have two users *root** and **sloth** both of which will have the password **12345678** and it'll be accessible in the port 3307

Persistence
-----------
A volume containing the data from **/var/lib/mysql** will be created to persist the information, once its created running the container build again will execute the starting scripts
