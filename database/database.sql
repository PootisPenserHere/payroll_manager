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
  `phone` INT(10) UNSIGNED NOT NULL comment 'The phone number of the person should be the mobile one but leaves room for home ones',
  `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP comment 'The date on which the registry was created',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment 'The date of the last time the row was modified',
  PRIMARY KEY  (`id`),
  UNIQUE (`phone`),
  UNIQUE (`firstName`,`middleName`,`lastName`,`birthDate`)
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
