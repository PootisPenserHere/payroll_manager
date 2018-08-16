================
Documentation
================

.. contents::

Functional requirements
--------------------------

- A user name and password auth
- Encrypted sensitive data
- The employee need to have their full name captured
  - The last name must tolerate being null
- An email will be needed for the employee
  - The email format must be formated
- Employees will need a phone number
- Searching employees despite the encryption
- Employees must have a unique code to reference them 
- Being able to modify the name, email and phone values of already existing employees
- Having the values for the different payments parametrized
- Allowing for employees to perform other roles during their work day
  - Only for the auxiliars
- Taking into account only the current momth for the salary
- Reducing the taxes for the salary
  - If it goes beyond the threshold a differnt percentaje is paid in taxes
  - The way the extra tax is handled should be parametrized
  
 Non functional requirments
 ---------------------------
 - Session management
- Data integrity
- Data security
- Accessible through web
- Containerized

In
-----

Procesos
-----------

Out
-----

Tests
-------

Tools and software used
------
- phpstorm
- git
- docker && docker-compose
- Ubuntu 16
