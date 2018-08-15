# The database

#### The system has been built with the idea of running everything from within docker containers and due to that the following behaivor should be expected.

#### A new docker image with mysql 5.7 will be created when docker-compose is called which will contain the starting scripts to create the database structure and anything else that is requiered to begin working as well as a config file to change the default port that is exposed.

#### Once this process begins the database will be initialized by running the scripts in alphabetical order in the directory:
```
/docker-entrypoint-initdb.d
```

#### After the database image has been created it'll be accessible by default in the port 3307, the users 'root' and 'sloth' will be usable both of which have the password 12345678

## Data persistence

#### The database details will be stored in the volume mysql-data which is located in the volumes directory at the root of the project.
