================
Documentation
================

.. contents::

Requirements
----------------------------------
Funtional:
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
          - Only for the auxiliary personnel
    - Taking into account only the current month for the salary
    - Reducing the taxes for the salary
          - If it goes beyond the threshold a different percentage is paid in taxes
          - The way the extra tax is handled should be parametrized
  

Funtional: 
    - Session management
    - Data integrity
    - Data security
    - Accessible through web
    - Containerized

Software behaivor
-----------------
In:
    - Employee details
        - First name
        - Middle name
        - Last name
        - Birth date
        - Email
        - Phone number
    - Work per day
        - Number of deliveries
        - Rol performed
Process:
    - Register a new employee
    - Modify employee
    - Search employee
    - Add new work day for employee
    - Calculate monthly payment for employee

Out:
    - Upon registering
        - Employee code
    - In the work days registry
        - Raw salary for the the month
        - Taxes discounted
        - Real salary for the month
        - Vouchers (if applicable)
        
Calculating the monthly salary
--------------------------------
.. image:: https://raw.githubusercontent.com/PootisPenserHere/payroll_manager/master/documentation/calculatingSalary.bmp
 
Tests cases
-----------------
+----+----------------------------------------------------------------------------------------------+---------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| Id | Description                                                                                  | Input                                                               | Expected output                                                                                       |
+----+----------------------------------------------------------------------------------------------+---------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| 1  | Displaying current salary for the outgoing month                                             | Selecting an employee from the search field                         | On the right side of the window a break down of the employee's salary for the month will be displayed |
+----+----------------------------------------------------------------------------------------------+---------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| 2  | Submitting incomplete form                                                                   | All of the input but one of the fields                              | An error shown in a red modal describing the missing field                                            |
+----+----------------------------------------------------------------------------------------------+---------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| 3  | Altering the sent data to change the performed rol to one that can't be done by the employee | A employee other than aux performing a different rol than their own | An error displaying that the employee can't perform that task                                         |
+----+----------------------------------------------------------------------------------------------+---------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+

Executed tests
---------------
+----+----------------------------------------------------------------------------------------------+--------------------------------------------------------------------------+------------------+
| Id | Description                                                                                  | Result                                                                   | What went wrong? |
+----+----------------------------------------------------------------------------------------------+--------------------------------------------------------------------------+------------------+
| 1  | Displaying current salary for the outgoing month                                             | When the employee was selected the current salary was loaded succesfully |                  |
+----+----------------------------------------------------------------------------------------------+--------------------------------------------------------------------------+------------------+
| 2  | Submitting incomplete form                                                                   | Got the error "The number of deliveries cannot be empty or 0"            |                  |
+----+----------------------------------------------------------------------------------------------+--------------------------------------------------------------------------+------------------+
| 3  | Altering the sent data to change the performed rol to one that can't be done by the employee | Got the error "The selected rol can't be done by this type of employee"  |                  |
+----+----------------------------------------------------------------------------------------------+--------------------------------------------------------------------------+------------------+

Tools
----------------------------------
The following tools and software were used:
- phpstorm
- git
- docker && docker-compose
- Ubuntu 16
