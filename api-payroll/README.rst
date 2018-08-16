=======
The api
=======

.. contents::

About
-------
The project has been built with slim in the backed and jquery with bootstrap for the front, both of them share the public folder from which they can be accessed by the general public.

Auth
------
The system uses cookie based sessions which are handled by a midleware, have a time to live of 10 minutes and are refreshed each time a new request is made to the api, further more the contents of the session itself has been secured with openssl.

Database
---------
To connect to the database pdo is used, its configuration can be found at **src/settings.php** under the mysql section. The following settings are set as default:
    **PDO::ATTR_EMULATE_PREPARES** Has been set to true in order to lower the strain on the database by processing the prepare statements on the server side, if cache performance is desired this option should be changed to false
    - **PDO::ATTR_ERRMODE** Uses **PDO::ERRMODE_EXCEPTION** which will return all mysql errors as exceptions to prevent further execution of the software
    - **PDO::ATTR_DEFAULT_FETCH_MODE** uses **PDO::FETCH_ASSOC** and as such the query ouput system wide is expected as an associative array

Data protection
----------------
|  Encryption has been applied to sensitive data, passwords are protected with with bcrypt and it's configuration can be found in the settings.php file, by default a cost of 12 is used for the hashing as well as a 16 characters randomly generated string (128 bits) as an iv.

|  For data that needs to be both read and written such as names AES in mode cbc with 256 block size has been used.

|  The reason to have choosen AES is the desire to make the process of securing the data both secure and affordable since many hardware manufacturers already have architectures designed to improce the speed of AES.

| **Important note**: While in this project the encryption password has been saved into the settings.php file it's adviced that in a real use case it's stored more securely or else where entirely such as a key management service.

Error handling
---------------
Should an exception be encountered it'll be caught by a middleware that will form a new response body, returning it with a 500 http code and a json object containing the keys status set to error as well as a message key that will contain the exception that was raised.
