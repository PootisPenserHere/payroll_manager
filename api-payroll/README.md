# The api

### Database
##### The connection to the database is handled by pdo, it's configuraitions can be in the section mysql in the file
#
```
src/settings.php
```

##### The default configurations for pdo are:
#
```
PDO::ATTR_EMULATE_PREPARES
```
###### By default true, to lower the strain on the database by processing the prepare statements on the server side, if cashe performance is desired this option should be changed to fale
#
```
PDO::ATTR_ERRMODE
```
######  Set to 'PDO::ERRMODE_EXCEPTION' which will return all mysql errors as exceptions to prevent further execution of the software
#

```
PDO::ATTR_DEFAULT_FETCH_MODE
```
######  Set to 'PDO::FETCH_ASSOC' which will return the query output as an array of associative arrays where the alias or field name will be the key

### Error handling
##### Should an exception be encountered it'll be caught by a middleware that will form a new response body, returning it with a 500 http code and a json object containing the keys status set to error as well as a message key that will contain the exeption that was raised and caused the error.

### Sessions
When a user logs into the system a session will be created by apache, handle with its default behaivor by a cookie.

### Data protection
Encryption has been applied to sensitive data, passwords are protected with with bcrypt and it's configuration can be found in the settings.php file, by default a cost of 12 is used for the hashing as well as a 16 characters randomly generated string (128 bits) as an iv.

For data that needs to be both read and written such as names AES in mode cbc with 256 block size has been used.

The reason to have choosen AES is the desire to make the process of securing the data both secure and affordable since many hardware manufacturers already have architectures designed to improce the speed of AES.

Important note: While in this project the encryption password has been saved into the settings.php file it's adviced that in a real use case it's stored more securely or else where entirely such as a key management service.

### The endpoints
