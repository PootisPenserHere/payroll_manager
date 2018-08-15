<?php
namespace App\Application;

use Exception;
use phpDocumentor\Reflection\Types\Integer;

class EmployeeApplication{
    private $pdo;
    private $cryptographyService;
    private $asserts;
    private $settings;

    function __construct($employeeSettings, $mysql, $cryptographyService, $asserts){
        $this->settings = $employeeSettings;

        $this->cryptographyService = $cryptographyService;
        $this->pdo = $mysql;
        $this->asserts = $asserts;
    }

    /**
     * A list of the types of employee used in the system
     *
     * @return array
     * @throws Exception
     */
    function listEmployeeTypes(){
        $stmt = $this->pdo->prepare("SELECT
                                        id, name
                                    FROM
                                        employeeType
                                    WHERE
                                        status = 'ACTIVE'");
        $stmt->execute();

        $results = $stmt->fetchAll();

        if(!$results){
            throw new Exception("The types of employees could not be found..");
        }
        $stmt = null;

        $employeeTypes = array();
        foreach($results as $row){
            $employeeTypes[] = array('id' => (int)$row['id'], 'name' => $row['name']);
        }

        return $employeeTypes;
    }

    /**
     * @param $firstName binary
     * @param $middleName binary
     * @param $lastName binary or null
     * @param $birthDate date yyyy-mm-dd
     * @param $email string
     * @param $phone string
     * @return integer
     * @throws Exception
     */
    function saveNewPerson($firstName, $middleName, $lastName, $birthDate, $email, $phone){
        $this->asserts->isNotEmpty($firstName, "The first name can't be empty.");
        $this->asserts->isNotEmpty($middleName, "The middle name can't be empty.");
        $this->asserts->isNotEmpty($birthDate, "The birth date can't be empty.");
        $this->asserts->dateIsNotInTheFuture($birthDate, "The birth date can't be in the future.");
        $this->asserts->isNotEmpty($email, "The email can't be empty.");
        $this->asserts->isNotEmpty($phone, "The phone number can't be empty.");

        try {
            $stmt = $this->pdo->prepare("INSERT INTO persons (firstName, middleName, lastName, birthDate, email, phone)
                                          VALUES (:firstName, :middleName, :lastName, :birthDate, :email, :phone)");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':firstName' => $firstName, ':middleName' => $middleName, ':lastName' => $lastName,
                ':birthDate' => $birthDate, ':email' => $email, ':phone' => $phone));
            $id = $this->pdo->lastInsertId();
            $this->pdo->commit();

            return $id;

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
            throw new Exception('There was an error while trying to save a new person.');
            $this->logger->warning("There was an error in the EmployeeApplication->saveNewPerson caused by: $e ");
        }
    }

    /**
     * @param $idEmployeeType integer
     * @param $idPerson integer
     * @param $code string
     * @param $contractType string
     * @return mixed
     * @throws Exception
     */
    function savePersonAsEmployee($idEmployeeType, $idPerson, $code, $contractType){
        $this->asserts->higherThanZero($idEmployeeType, "idEmployeeType must be higher than 0");
        $this->asserts->higherThanZero($idPerson, "idPerson must be higher than 0");
        $this->asserts->isNotEmpty($code, "The code can't be empty.");
        $this->asserts->isNotEmpty($contractType, "The contract type can't be empty.");
        try {
            $stmt = $this->pdo->prepare("INSERT INTO employees (idEmployeeType, idPerson, code, contractType)
                                          VALUES (:idEmployeeType, :idPerson, :code, :contractType)");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':idEmployeeType' => $idEmployeeType, ':idPerson' => $idPerson, ':code' => $code,
                ':contractType' => $contractType));
            $id = $this->pdo->lastInsertId();
            $this->pdo->commit();

            return $id;

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
            throw new Exception('There was an error while trying to save a new employee.');
            $this->logger->warning("There was an error in the EmployeeApplication->savePersonAsEmployee caused by: $e ");
        }
    }

    /**
     * @param $requestData object
     * @return array
     * @throws Exception
     */
    function saveNewEmployee($requestData){
        // Getting and validating the data
        $firstName = $requestData['firstName'];
        $this->asserts->isNotEmpty($firstName, "The first name can't be empty.");
        $this->asserts->isString($firstName, "The first name must be a string.");
        $this->asserts->betweenLength($firstName, 1, 50, "The first name must have a length between 1 and 50 characters.");

        $middleName = $requestData['middleName'];
        $this->asserts->isNotEmpty($middleName, "The middle name can't be empty.");
        $this->asserts->isString($middleName, "The middle name must be a string.");
        $this->asserts->betweenLength($middleName, 1, 50, "The middle name must have a length between 1 and 50 characters.");

        $lastName = isset($requestData['lastName'])
            ? $requestData['lastName']
            : null;

        $birthDate = $requestData['birthDate'];
        $this->asserts->isNotEmpty($birthDate, "The birth date can't be empty.");
        $this->asserts->dateIsNotInTheFuture($birthDate, "The birth date can't be in the future.");

        $email = $requestData['email'];
        $this->asserts->isNotEmpty($email, "The email can't be empty.");
        $this->asserts->betweenLength($email, 1, 100, "The middle name must have a length between 1 and 100 characters.");
        $this->asserts->isEmail($email, "The email isn't in a correct format");

        $phone = $requestData['phone'];
        $this->asserts->isNotEmpty($phone, "The phone number can't be empty.");
        $this->asserts->betweenLength($phone, 10, 10, "The phone number must be 10 digits without special characters.");

        $idEmployeeType = $requestData{'idEmployeeType'};
        $this->asserts->higherThanZero($idEmployeeType, 'idEmployeeType must be higher than zero.');

        $contractType = $requestData{'contractType'};
        $this->asserts->isNotEmpty($contractType, "The contract type can't be empty.");
        $this->asserts->existInArray($contractType, $this->settings['contractTypes'], 'The contract type is not a valid one.');

        // Encrypting the sensitive data
        $securedFirstName = $this->cryptographyService->encryptString($firstName);
        $securedMiddleName = $this->cryptographyService->encryptString($middleName);

        if (isset($lastName)) {
            $securedLastName = $this->cryptographyService->encryptString($lastName);
        } else {
            $securedLastName = null;
        }

        $securedEmail = $this->cryptographyService->encryptString($email);

        // Here begins the saving process
        $idNewPerson = $this->saveNewPerson($securedFirstName, $securedMiddleName, $securedLastName,
            $birthDate, $securedEmail, $phone);

        $employeeCode = $this->cryptographyService->pseudoRandomStringOpenssl($this->settings['codeLength']);
        $idEmployee = $this->savePersonAsEmployee($idEmployeeType, $idNewPerson, $employeeCode, $contractType);

        $response = array(
            "fullName" => "$firstName $middleName $lastName",
            "employeeCode" => $employeeCode,
            "idEmployee" => $idEmployee,
            "email" => $email,
            "phone" => $phone
        );

        return $response;
    }

    /**
     * @param $idEmployee
     * @return Integer
     * @throws Exception
     */
    function getIdPersonByIdEmployee($idEmployee){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $stmt = $this->pdo->prepare("SELECT
                                        COALESCE((SELECT
                                                        idPerson
                                                    FROM
                                                        employees
                                                    WHERE
                                                        id = :idEmployee),
                                                0) AS id");

        $stmt->execute(array(':idEmployee' => $idEmployee));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception("An error occurred while trying to find the person associated with the employee..");
        }
        $stmt = null;

        return $results[0]['id'];
    }

    /**
     * @param $code string
     * @return integer
     * @throws Exception
     */
    function getIdEmployeeTypeByCode($code){
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $stmt = $this->pdo->prepare("SELECT COALESCE((SELECT
                                        et.id
                                    FROM
                                        employees e
                                            INNER JOIN
                                        employeeType et ON et.id = e.idEmployeeType
                                    WHERE
                                        e.code = :code), 0) AS id");

        $stmt->execute(array(':code' => $code));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception("The employee could not be found.");
        }
        $stmt = null;

        return $results[0]['id'];
    }

    /**
     * @param $code string
     * @return integer
     * @throws Exception
     */
    function getIdEmployeeByCode($code){
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $stmt = $this->pdo->prepare("SELECT
                                    COALESCE((SELECT
                                                    id
                                                FROM
                                                    employees
                                                WHERE
                                                    code = :code),
                                            0) AS id;
                                    ");

        $stmt->execute(array(':code' => $code));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception("The employee could not be found.");
        }
        $stmt = null;

        return $results[0]['id'];
    }

    /**
     * Gets the data associated with the employee
     *
     * @param $idEmployee
     * @return array
     * @throws Exception
     */
    function getEmployeeDataById($idEmployee){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $stmt = $this->pdo->prepare("SELECT
                                        e.id AS idEmployee,
                                        p.id AS idPerson,
                                        p.firstName,
                                        p.middleName,
                                        IFNULL(p.lastName, '') AS lastName,
                                        p.birthDate,
                                        p.email,
                                        p.phone,
                                        e.code,
                                        e.idEmployeeType,
                                        e.contractType
                                    FROM
                                        employees e
                                            INNER JOIN
                                        persons p ON p.id = e.idPerson
                                    WHERE
                                        e.id = :idEmployee");

        $stmt->execute(array(':idEmployee' => $idEmployee));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception("The employee could not be found.");
        }
        $stmt = null;

        return $results[0];
    }

    /**
     * Acts as a man in the middle for the getEmployeeDataById method to decrypt the contents
     * and make the necesary data manipulations
     *
     * @param $idEmployee
     * @return array
     * @throws Exception
     */
    function proxyGetEmployeeDataById($idEmployee){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $employeeData = $this->getEmployeeDataById($idEmployee);

        $response = array(
            "idEmployee" => (int)$employeeData['idEmployee'],
            "idPerson" => (int)$employeeData['idPerson'],
            "firstName" => $this->cryptographyService->decryptString($employeeData['firstName']),
            "middleName" => $this->cryptographyService->decryptString($employeeData['middleName']),

            "lastName" => strlen($employeeData['lastName']) > 0
                ? $this->cryptographyService->decryptString($employeeData['lastName'])
                : '',

            "birthDate" => $employeeData['birthDate'],
            "email" => $this->cryptographyService->decryptString($employeeData['email']),
            "phone" => $employeeData['phone'],
            "code" => $employeeData['code'],
            "idEmployeeType" => $employeeData['idEmployeeType'],
            "contractType" => $employeeData['contractType']

        );

        return $response;
    }

    /**
     * @param $code string
     * @return array
     * @throws Exception
     */
    function getEmployeeDataByCode($code){
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $idEmployee = $this->getIdEmployeeByCode($code);

        return $this->proxyGetEmployeeDataById($idEmployee);
    }

    /**
     * @param $idPerson integer
     * @param $firstName  binary
     * @param $middleName binary
     * @param $lastName binary
     * @param $birthDate date
     * @param $email binary
     * @param $phone string
     */
    function updatePerson($idPerson, $firstName, $middleName, $lastName, $birthDate, $email, $phone){
        $this->asserts->higherThanZero($idPerson, "idPerson must be higher than 0");
        $this->asserts->isNotEmpty($firstName, "The first name can't be empty.");
        $this->asserts->isNotEmpty($middleName, "The middle name can't be empty.");
        $this->asserts->isNotEmpty($birthDate, "The birth date can't be empty.");
        $this->asserts->dateIsNotInTheFuture($birthDate, "The birth date can't be in the future.");
        $this->asserts->isNotEmpty($email, "The email can't be empty.");
        $this->asserts->isNotEmpty($phone, "The phone number can't be empty.");

        try {
            $stmt = $this->pdo->prepare("UPDATE persons
                                        SET
                                            firstName = :firstName,
                                            middleName = :middleName,
                                            lastName = :lastName,
                                            birthDate = :birthDate,
                                            email = :email,
                                            phone = :phone
                                        WHERE
                                            id = :idPerson");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':firstName' => $firstName, ':middleName' => $middleName, ':lastName' => $lastName,
                ':birthDate' => $birthDate, ':email' => $email, ':phone' => $phone, ':idPerson' => $idPerson));
            $this->pdo->commit();

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
        }
    }

    /**
     * @param $idEmployee integer
     * @param $code string
     * @param $idEmployeeType integer
     * @param $contractType string
     */
    function updateEmployee($idEmployee, $code, $idEmployeeType, $contractType){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");
        $this->asserts->isNotEmpty($code, "The code can't be empty.");
        $this->asserts->higherThanZero($idEmployeeType, "idEmployeeType must be higher than 0");
        $this->asserts->isNotEmpty($contractType, "The contract type can't be empty.");

        try {
            $stmt = $this->pdo->prepare("UPDATE employees
                                        SET
                                            idEmployeeType = :idEmployeeType,
                                            code = :code,
                                            contractType = :contractType
                                        WHERE
                                            id = :idEmployee");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':idEmployeeType' => $idEmployeeType, ':code' => $code, ':contractType' => $contractType,
                ':idEmployee' => $idEmployee));
            $this->pdo->commit();

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
        }
    }

    /**
     * @param $requestData object
     * @return array
     */
    function updateEmployeeData($requestData){
        // Getting and validating the data
        $code = $requestData['code'];
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $idEmployee = $this->getIdEmployeeByCode($code);
        $idPerson = $this->getIdPersonByIdEmployee($idEmployee);

        $firstName = $requestData['firstName'];
        $this->asserts->isNotEmpty($firstName, "The first name can't be empty.");
        $this->asserts->isString($firstName, "The first name must be a string.");
        $this->asserts->betweenLength($firstName, 1, 50, "The first name must have a length between 1 and 50 characters.");

        $middleName = $requestData['middleName'];
        $this->asserts->isNotEmpty($middleName, "The middle name can't be empty.");
        $this->asserts->isString($middleName, "The middle name must be a string.");
        $this->asserts->betweenLength($middleName, 1, 50, "The middle name must have a length between 1 and 50 characters.");

        $lastName = isset($requestData['lastName']) ? $requestData['lastName'] : null;

        $birthDate = $requestData['birthDate'];
        $this->asserts->isNotEmpty($birthDate, "The birth date can't be empty.");
        $this->asserts->dateIsNotInTheFuture($birthDate, "The birth date can't be in the future.");

        $email = $requestData['email'];
        $this->asserts->isNotEmpty($email, "The email can't be empty.");
        $this->asserts->betweenLength($email, 1, 100, "The middle name must have a length between 1 and 100 characters.");
        $this->asserts->isEmail($email, "The email isn't in a correct format");

        $phone = $requestData['phone'];
        $this->asserts->isNotEmpty($phone, "The phone number can't be empty.");
        $this->asserts->betweenLength($phone, 10, 10, "The phone number must be 10 digits without special characters.");

        $idEmployeeType = $requestData{'idEmployeeType'};
        $this->asserts->higherThanZero($idEmployeeType, "idEmployeeType must be higher than 0");

        $contractType = $requestData{'contractType'};
        $this->asserts->isNotEmpty($contractType, "The contract type can't be empty.");
        $this->asserts->existInArray($contractType, $this->settings['contractTypes'], 'The contract type is not a valid one.');

        // Encrypting the sensitive data
        $securedFirstName = $this->cryptographyService->encryptString($firstName);
        $securedMiddleName = $this->cryptographyService->encryptString($middleName);

        if (isset($lastName)) {
            $securedLastName = $this->cryptographyService->encryptString($lastName);
        } else {
            $securedLastName = null;
        }

        $securedEmail = $this->cryptographyService->encryptString($email);

        // Update process
        $this->updatePerson($idPerson, $securedFirstName, $securedMiddleName, $securedLastName,
            $birthDate, $securedEmail, $phone);

        $this->updateEmployee($idEmployee, $code, $idEmployeeType, $contractType);

        $response = array(
            "fullName" => "$firstName $middleName $lastName",
            "idEmployee" => $idEmployee,
            "email" => $email,
            "phone" => $phone,
            "birthDate" => $birthDate,
            "idEmployeeType" => $idEmployeeType,
            "contractType" => $contractType
        );

        return $response;
    }

    function disableEmployeeRecord($idEmployee){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        try {
            $stmt = $this->pdo->prepare("UPDATE employees
                                        SET
                                            status = 'INACTIVE'
                                        WHERE
                                            id = :idEmployee");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':idEmployee' => $idEmployee));
            $this->pdo->commit();

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
        }
    }

    /**
     * Intended for internal use
     *
     * This method will bring a list of ids of all the employees that are
     * currently active in the system
     *
     * @return array
     * @throws Exception
     */
    function getIdEmployeeFromAllActiveEmployees(){
        $stmt = $this->pdo->prepare("SELECT
                                        id
                                    FROM
                                        employees
                                    WHERE
                                        status = 'ACTIVE';");
        $stmt->execute();

        $results = $stmt->fetchAll();

        if(!$results){
            throw new Exception("The employee could not be found.");
        }
        $stmt = null;

        return $results;
    }

    /**
     * Uses an already existing method to create and array containing the details of
     * all currently active employees
     *
     * @return array
     * @throws Exception
     */
    function listAllActiveEmployees(){
        $ids = $this->getIdEmployeeFromAllActiveEmployees();

        $result = array();

        foreach($ids as $row){
            $currentEmployee = $this->proxyGetEmployeeDataById($row['id']);

            $result[] = array(
                'fullName' => $currentEmployee['firstName']." ".
                    $currentEmployee['middleName']." ".
                    $currentEmployee['lastName'],
                'code' => $currentEmployee['code']
            );
        }

        return $result;
    }

    /**
     * Takes an array of all active employees and filters them by a string, returning
     * all sub arrays that contain such string
     *
     * @param $partialName string
     * @return array
     * @throws Exception
     */
    function findEmployeeByFullName($partialName){
        $fullList = $this->listAllActiveEmployees();

        $pattern = '/'.$partialName.'/';

        $matches = array_filter($fullList, function($a) use($pattern)  {
            return preg_grep($pattern, $a);
        });

        return $matches;
    }

    /**
     * Helper to determine if the date has already been saved as a worked day for
     * an employee, so long as it's currently active in the database
     *
     * @param $idEmployee integer
     * @param $date date
     * @return integer
     * @throws Exception
     */
    function checkDateNotUsedWorkDayPerEmployee($idEmployee, $date){
        $this->asserts->isNotEmpty($idEmployee, "The code can't be empty.");
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $this->asserts->isNotEmpty($date, "The code can't be empty.");
        $this->asserts->dateIsNotInTheFuture($date, "The date can't be in the future.");

        $stmt = $this->pdo->prepare("SELECT
                                    COALESCE((SELECT
                                                    COUNT(*)
                                                FROM
                                                    paymentsPerEmployeePerDay
                                                WHERE
                                                    date = :date AND idEmployee = :idEmployee
                                                        AND status = 'ACTIVE'),
                                            0) AS timesDateFound");

        $stmt->execute(array(':date' => $date, ':idEmployee' => $idEmployee));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception('Unable to determine the usage of date for the worked days.');
        }
        $stmt = null;

        return $results[0]['timesDateFound'];
    }

    /**
     * Saves the new worked day for the employee
     *
     * @param $idEmployee integer
     * @param $date date
     * @param $baseAmount double
     * @param $bonusTime double
     * @param $deliveries double
     * @return integer
     * @throws Exception
     */
    function saveWorkedDay($idEmployee, $date, $baseAmount, $bonusTime, $deliveries){
        $this->asserts->isNotEmpty($idEmployee, "The idEmployee can't be empty.");
        $this->asserts->isNotEmpty($date, "The date can't be empty.");
        $this->asserts->dateIsNotInTheFuture($date, "The date can't be in the future.");
        $this->asserts->isNotEmpty($baseAmount, "The base payment per day can't be empty.");
        $this->asserts->isNotEmpty($bonusTime, "The bonus per worked hours can't be empty.");
        $this->asserts->isNotEmpty($deliveries, "The payment for deliveries can't be empty.");

        try {
            $stmt = $this->pdo->prepare("INSERT INTO paymentsPerEmployeePerDay
                                          (idEmployee, date, baseAmount, bonusTime, deliveries)
                                          VALUES (:idEmployee, :date, :baseAmount, :bonusTime, :deliveries)");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':idEmployee' => $idEmployee, ':date' => $date, ':baseAmount' => $baseAmount,
                ':bonusTime' => $bonusTime, ':deliveries' => $deliveries));
            $id = $this->pdo->lastInsertId();
            $this->pdo->commit();

            return $id;

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
            throw new Exception('There was an error while trying to save the worked day.');
        }
    }

    /**
     * Takes the data from the front end for the new worked day for a
     * employee and saves it
     *
     * @param $requestData object
     * @return array
     * @throws Exception
     */
    function SaveNewWorkDay($requestData){
        $code = $requestData['code'];
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $idEmployee = $this->getIdEmployeeByCode($code);
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $idEmployeeType = $this->getIdEmployeeTypeByCode($code);
        $this->asserts->higherThanZero($idEmployeeType, "idEmployeeType must be higher than 0");

        $idEmployeeTypePerformed = $requestData['idEmployeeTypePerformed'];
        $this->asserts->isNotEmpty($idEmployeeTypePerformed, "The performed rol must be provided.");
        $this->asserts->higherThanZero($idEmployeeTypePerformed, "idEmployeeTypePerformed must be higher than 0");

        $deliveries = $requestData['deliveries'];
        $this->asserts->isNotEmpty($deliveries, "The number of deliveries cannot be empty or 0.");

        $date = $requestData['date'];
        $this->asserts->isNotEmpty($date, "The worked date cannot be empty.");
        $this->asserts->dateIsNotInTheFuture($date, "The date can't be in the future.");

        if($this->checkDateNotUsedWorkDayPerEmployee($idEmployee, $date) > 0){
            throw new Exception("This date has already been saved as a worked day.");
        }

        // The emplpoyee can't take that rol
        if($idEmployeeType != 3 and $idEmployeeType != $idEmployeeTypePerformed){
            throw new Exception("The performed rol can't be done by this type of employee.");
        }

        // If we're working on a different month
        $this->asserts->datesHaveSameMonth($date, date('Y-m-d'), "Work days can only be registered within the same month.");

        $baseAmountPaid = $this->settings['hoursPerWorkDay'] * $this->settings['paymentPerHour'];

        // Getting setting data based on employee type that was performed
        switch ($idEmployeeTypePerformed) {
            case 1:
                $perHourBonus = $this->settings['perHourBonusDriver'];
                break;
            case 2:
                $perHourBonus = $this->settings['perHourBonusLoader'];
                break;
            case 3:
                $perHourBonus = $this->settings['perHourBonusAux'];
                break;
        }

        $bonusTime = $perHourBonus * $this->settings['hoursPerWorkDay'];
        $bonusDeliveries = $deliveries * $this->settings['bonusPerDelivery'];

        $idPaymentPerEmployeePerDay = $this->saveWorkedDay($idEmployee, $date, $baseAmountPaid,
            $bonusTime, $bonusDeliveries);

        $contractType = $this->getContractTypeByEmployee($idEmployee);

        $this->storeWorkDayDetails($idPaymentPerEmployeePerDay, $idEmployeeType, $idEmployeeTypePerformed,
            $contractType, $this->settings['hoursPerWorkDay'], $this->settings['paymentPerHour'],
            $perHourBonus, $deliveries, $this->settings['bonusPerDelivery']);

        return array('status' => 'success', 'message' => 'The worked day has been saved.', 'data' => $requestData);
    }

    /**
     * The number of days the employee has worked for a given year and month only
     * taking into accout the active ones
     *
     * @param $idEmployee integer
     * @param $year integer
     * @param $month integer
     * @return integer
     * @throws Exception
     */
    function findNumberWorkedOfDaysByEmployeeAndDate($idEmployee, $year, $month){
        $this->asserts->isNotEmpty($idEmployee, "The code can't be empty.");
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");
        $this->asserts->higherThanZero($year, "year must be higher than 0");
        $this->asserts->higherThanZero($month, "month must be higher than 0");

        $stmt = $this->pdo->prepare("SELECT
                                    COALESCE((SELECT
                                                    COUNT(*)
                                                FROM
                                                    paymentsPerEmployeePerDay
                                                WHERE
                                                    idEmployee = :idEmployee
                                                        AND YEAR(date) = :year
                                                        AND MONTH(date) = :month
                                                        AND status = 'ACTIVE'),
                                            0) AS workedDays");

        $stmt->execute(array(':idEmployee' => $idEmployee, ':year' => $year, ':month' => $month));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception('Unable to determine the amount of worked days.');
        }
        $stmt = null;

        return $results[0]['workedDays'];
    }

    /**
     * A list of the data contained from all the days the employee has worked
     * for the given month and year
     *
     * @param $idEmployee integer
     * @param $year integer
     * @param $month integer
     * @return array
     * @throws Exception
     */
    function getDataWorkedDaysByEmployee($idEmployee, $year, $month){
        $stmt = $this->pdo->prepare("SELECT
                                        baseAmount, bonusTime, deliveries
                                    FROM
                                        paymentsPerEmployeePerDay
                                    WHERE
                                        idEmployee = :idEmployee AND
                                            YEAR(date) = :year
                                            AND MONTH(date) = :month
                                            AND status = 'ACTIVE'");
        $stmt->execute(array(':idEmployee' => $idEmployee, ':year' => $year, ':month' => $month));

        $results = $stmt->fetchAll();

        if(!$results){
            throw new Exception("No data of the worked days could be found.");
        }
        $stmt = null;

        return $results;
    }

    /**
     * @param $idEmployee integer
     * @return string
     * @throws Exception
     */
    function getContractTypeByEmployee($idEmployee){
        $this->asserts->isNotEmpty($idEmployee, "The code can't be empty.");
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $stmt = $this->pdo->prepare("SELECT
                                        contractType
                                    FROM
                                        employees
                                    WHERE
                                        id = :idEmployee");

        $stmt->execute(array(':idEmployee' => $idEmployee));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception("The employee wasn't found.");
        }
        $stmt = null;

        return $results[0]['contractType'];
    }

    /**
     * Creates a backup of the information used to calculate the amount that the employee
     * will be paid for the submitted day
     *
     * @param $idPaymentPerEmployeePerDay integer
     * @param $idEmployeeType integer
     * @param $idEmployeeTypePerformed integer
     * @param $contractType string
     * @param $hoursWorked double
     * @param $paymentPerHour double
     * @param $bonusPerHour double
     * @param $deliveries integer
     * @param $paymentPerDelivery double
     * @return integer
     * @throws Exception
     */
    function storeWorkDayDetails($idPaymentPerEmployeePerDay, $idEmployeeType, $idEmployeeTypePerformed, $contractType, $hoursWorked,
                                 $paymentPerHour, $bonusPerHour, $deliveries, $paymentPerDelivery){
        $this->asserts->isNotEmpty($idPaymentPerEmployeePerDay, "The idPaymentPerEmployeePerDay can't be empty.");
        $this->asserts->isNotEmpty($idEmployeeType, "The idEmployeeType can't be empty.");
        $this->asserts->isNotEmpty($idEmployeeTypePerformed, "The idEmployeeTypePerformed can't be empty.");
        $this->asserts->isNotEmpty($contractType, "The contractType can't be empty.");
        $this->asserts->isNotEmpty($hoursWorked, "The hoursWorked can't be empty.");
        $this->asserts->isNotEmpty($paymentPerHour, "The paymentPerHour can't be empty.");
        $this->asserts->isNotEmpty($bonusPerHour, "The bonusPerHour can't be empty.");
        $this->asserts->isNotEmpty($deliveries, "The deliveries can't be empty.");
        $this->asserts->isNotEmpty($paymentPerDelivery, "The paymentPerDelivery can't be empty.");

        try {
            $stmt = $this->pdo->prepare("INSERT INTO paymentsPerEmployeePerDayDetail
                                            (idPaymentPerEmployeePerDay, idEmployeeType, idEmployeeTypePerformed,
                                            contractType, hoursWorked, paymentPerHour, bonusPerHour, deliveries, paymentPerDelivery)
                                        VALUES
                                            (:idPaymentPerEmployeePerDay, :idEmployeeType, :idEmployeeTypePerformed,
                                            :contractType, :hoursWorked, :paymentPerHour, :bonusPerHour, :deliveries, :paymentPerDelivery)");
            $this->pdo->beginTransaction();
            $stmt->execute(array(':idPaymentPerEmployeePerDay' => $idPaymentPerEmployeePerDay,
                ':idEmployeeType' => $idEmployeeType,
                ':idEmployeeTypePerformed' => $idEmployeeTypePerformed,
                ':contractType' => $contractType,
                ':hoursWorked' => $hoursWorked,
                ':paymentPerHour' => $paymentPerHour,
                ':bonusPerHour' => $bonusPerHour,
                ':deliveries' => $deliveries,
                ':paymentPerDelivery' => $paymentPerDelivery)
            );
            $id = $this->pdo->lastInsertId();
            $this->pdo->commit();

            return $id;

            $stmt = null;
        } catch( PDOExecption $e ) {
            $this->pdo->rollback();
            throw new Exception("An error occured while saving the work day details.");
        }
    }

    /**
     * @param $date date
     * @param $code string
     * @return array
     * @throws Exception
     */
    function getDataWorkDayByDateAndCode($date, $code){
        $idEmployee = $this->getIdEmployeeByCode($code);
        $this->asserts->dateIsNotInTheFuture($date, "The date can't be in the future.");

        $stmt = $this->pdo->prepare("SELECT
                                        b.idPaymentPerEmployeePerDay,
                                        b.idEmployeeType,
                                        b.idEmployeeTypePerformed,
                                        b.contractType,
                                        b.hoursWorked,
                                        b.paymentPerHour,
                                        b.bonusPerHour,
                                        b.deliveries,
                                        b.paymentPerDelivery
                                    FROM
                                        paymentsPerEmployeePerDay a
                                            INNER JOIN
                                        paymentsPerEmployeePerDayDetail b ON b.idPaymentPerEmployeePerDay = a.id
                                    WHERE
                                        a.idEmployee = :idEmployee
                                            AND a.date = :date
                                            AND a.status = 'ACTIVE'
                                            AND b.status = 'ACTIVE'
                                    ORDER BY b.id DESC
                                    LIMIT 1");
        $stmt->execute(array(':idEmployee' => $idEmployee, ':date' => $date));

        $results = $stmt->fetchAll();

        if(!$results){
            throw new Exception("No data of the work day was found.");
        }
        $stmt = null;

        foreach($results as $row){
            $data = array(
                'idPaymentPerEmployeePerDay' => (int)$row['idPaymentPerEmployeePerDay'],
                'idEmployeeType' => (int)$row['idEmployeeType'],
                'idEmployeeTypePerformed' => (int)$row['idEmployeeTypePerformed'],
                'contractType' => $row['contractType'],
                'hoursWorked' => (int)$row['hoursWorked'],
                'paymentPerHour' => (int)$row['paymentPerHour'],
                'bonusPerHour' => (int)$row['bonusPerHour'],
                'deliveries' => (int)$row['deliveries'],
                'paymentPerDelivery' => (int)$row['paymentPerDelivery']
            );
        }

        return $data;
    }

    /**
     * Gets all the worked days for an employee and determines how much they're
     * getting paid
     *
     * Will only work for the current month
     *
     * @param $code string
     * @return array
     * @throws Exception
     */
    function calculateSalaryByCode($code){
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $idEmployee = $this->getIdEmployeeByCode($code);
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $salary = array(
            'raw' => 0,
            'taxes' => 0,
            'real' => 0,
            'vouchers' => 0
        );

        // No worked days found
        if($this->findNumberWorkedOfDaysByEmployeeAndDate($idEmployee, date('Y'), date('m')) <= 0){
            return $salary;
        }

        $dataWorkedDays = $this->getDataWorkedDaysByEmployee($idEmployee, date('Y'), date('m'));

        $monthlyPayment = 0;
        foreach($dataWorkedDays as $row){
            $monthlyPayment = $monthlyPayment + $row['baseAmount'] + $row['bonusTime'] + $row['deliveries'];
        }

        $salary['raw'] = $monthlyPayment;

        if($monthlyPayment >= $this->settings['amountForExtraTaxes']){
            $this->settings['taxesAddUp']
                ? $taxes = $monthlyPayment * ($this->settings['baseIsr'] + $this->settings['extraIsr'])
                : $taxes = ($monthlyPayment * $this->settings['baseIsr']) + (($monthlyPayment * $this->settings['baseIsr']) * $this->settings['extraIsr']);
        }else{
            $taxes = $monthlyPayment * $this->settings['baseIsr'];
        }

        $salary['taxes'] = $taxes;
        $salary['real'] = $monthlyPayment - $taxes;

        $contractType = $this->getContractTypeByEmployee($idEmployee);

        if($contractType == 'INTERNO'){
            $vouchers = $monthlyPayment * $this->settings['percentOfPaymentForVouchers'];
        }elseif ($contractType == 'EXTERNO'){
            $this->settings['vouchersForAllContractTypes']
                ? $vouchers = $monthlyPayment * $this->settings['percentOfPaymentForVouchers']
                : $vouchers = 0;
        }

        $salary['vouchers'] = $vouchers;

        return $salary;
    }
}
?>
