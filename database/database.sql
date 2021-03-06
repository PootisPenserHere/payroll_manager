DROP DATABASE IF EXISTS payroll;

CREATE DATABASE payroll;
USE payroll;

DROP TABLE IF EXISTS persons;
CREATE TABLE IF NOT EXISTS `persons` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varbinary(500) NOT NULL comment 'The name of the person',
  `middleName` varbinary(500) NOT NULL comment 'The midle name of the person',
  `lastName` varbinary(500) comment 'The last name of the person',
  `birthDate` DATE NOT NULL DEFAULT '1900-01-01' comment 'Date of birth of the person',
  `email` varbinary(500) NOT NULL comment 'The email adress of the person',
  `phone` BIGINT(10) UNSIGNED NOT NULL comment 'The phone number of the person should be the mobile one but leaves room for home ones',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  UNIQUE (`phone`)
);

INSERT INTO persons (firstName, middleName, lastName, birthDate, email, phone)
  VALUES (
    '0524a1848795041c2259ad658897913d25bc36e7ce54fa8465de767a03be8aaa957591c84d51dd85f1b58fc0826db835',
    'b5293d82e3ebc1f36eb70f8c0007aaa2aa1cd3f1e2903e1e36fb35137e967d3a',
    'b04e81e22a98c1abfcb85688926aa5fa12aea511f600424c25a7e9b14a0ac6f8',
    '1991-06-06',
    '205fbeba023a9b846a11492bfc6e039619bb6068030bcc13e45d30e638f6c51b4099911dee2b5644d55b43a38e8591f32f579ba0df9bd710b9e6bf66e0544184',
    '0123456789');

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idPerson` INT UNSIGNED NOT NULL comment 'Id of the person, this contains the name and other personal data',
  `name` VARCHAR(50) NOT NULL comment 'Username',
  `password` VARCHAR(500) NOT NULL comment 'Hashed password',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  FOREIGN KEY (idPerson) REFERENCES persons(id),
  UNIQUE (`name`)
);

INSERT INTO users (idPerson, name, password)
  VALUES (1, 'sloth', '$2y$12$51mfESaLEGXDT4u9Bd9kiOHEpaJ1Bx4SEcVwsU5K6jVPMNkrnpJAa');

DROP TABLE IF EXISTS employeeType;
CREATE TABLE IF NOT EXISTS `employeeType` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL comment 'Type or rol that the employee can be',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  UNIQUE (`name`)
);

INSERT INTO employeeType (name) VALUES ('Chofer'),
                                        ('Cargador'),
                                        ('Auxiliar');

DROP TABLE IF EXISTS employees;
CREATE TABLE IF NOT EXISTS `employees` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idEmployeeType` INT UNSIGNED NOT NULL comment 'Defines the rol within the company',
  `idPerson` INT UNSIGNED NOT NULL comment 'Defines the rol within the company',
  `code` VARCHAR(100) NOT NULL comment 'A code to reference the employee',
  `contractType` ENUM('INTERNO', 'EXTERNO') NOT NULL comment 'The type of contract',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  INDEX `idx_contractType` (`contractType`),
  UNIQUE (`code`)
);

DROP TABLE IF EXISTS paymentsPerEmployeePerDay;
CREATE TABLE IF NOT EXISTS `paymentsPerEmployeePerDay` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idEmployee` INT UNSIGNED NOT NULL comment 'The employee to who this payment will be made',
  `date` DATE NOT NULL DEFAULT '1900-01-01' comment 'Date of the worked day',
  `baseAmount` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Amount paid for the hours worked',
  `bonusTime` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Bonus paid for the hours worked',
  `deliveries` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Bonus for the number of deliveries',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  FOREIGN KEY (idEmployee) REFERENCES employees(id),
  UNIQUE (`idEmployee`, `date`, `status`)
);

DROP TABLE IF EXISTS paymentsPerEmployeePerDayDetail;
CREATE TABLE IF NOT EXISTS `paymentsPerEmployeePerDayDetail` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idPaymentPerEmployeePerDay` INT UNSIGNED NOT NULL comment 'References the payment for the work day',
  `idEmployeeType` INT UNSIGNED NOT NULL comment 'The type of employee',
  `idEmployeeTypePerformed` INT UNSIGNED NOT NULL comment 'The employee working for the day as',
  `contractType` ENUM('INTERNO', 'EXTERNO') NOT NULL comment 'The type of contract',
  `hoursWorked` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Hours worked for the day',
  `paymentPerHour` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Payment per hour worked',
  `bonusPerHour` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Bonus payment per hour worked',
  `deliveries` INT UNSIGNED NOT NULL DEFAULT 0 comment 'Total amount of deliveries for the day',
  `paymentPerDelivery` DOUBLE(10,2) NOT NULL DEFAULT 0.0 comment 'Payment for each delivery done',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  FOREIGN KEY (idPaymentPerEmployeePerDay) REFERENCES paymentsPerEmployeePerDay(id),
  FOREIGN KEY (idEmployeeType) REFERENCES employeeType(id),
  FOREIGN KEY (idEmployeeTypePerformed) REFERENCES employeeType(id),
  FOREIGN KEY (contractType) REFERENCES employees(contractType)
);