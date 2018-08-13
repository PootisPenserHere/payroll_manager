<?php
namespace App\Application;

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

        $this->databaseSelectQueryErrorMessage = 'There was an error inserting the record.';
    }

    /**
     * @return array
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
            exit($this->databaseSelectQueryErrorMessage);
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
     */
    function saveNewPerson($firstName, $middleName, $lastName, $birthDate, $email, $phone){
        $this->asserts->isNotEmpty($firstName, "The first name can't be empty.");
        $this->asserts->isNotEmpty($middleName, "The middle name can't be empty.");
        $this->asserts->isNotEmpty($birthDate, "The birth date can't be empty.");
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

        $email = $requestData['email'];
        $this->asserts->isNotEmpty($email, "The email can't be empty.");
        $this->asserts->betweenLength($email, 1, 100, "The middle name must have a length between 1 and 100 characters.");
        $this->asserts->isEmail($email, "The email isn't in a correct format");

        $phone = $requestData['phone'];
        $this->asserts->isNotEmpty($phone, "The phone number can't be empty.");
        $this->asserts->betweenLength($phone, 10, 10, "The phone number must be 10 digits without special characters.");

        $idEmployeeType = $requestData{'idEmployeeType'};
        $contractType = $requestData{'contractType'};

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
            exit($this->databaseSelectQueryErrorMessage);
        }
        $stmt = null;

        return $results[0]['id'];
    }

    /**
     * @param $code string
     * @return integer
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
            exit($this->databaseSelectQueryErrorMessage);
        }
        $stmt = null;

        return $results[0]['id'];
    }

    /**
     * Gets the data associated with the employee
     *
     * @param $idEmployee
     * @return array
     */
    function getEmployeeDataById($idEmployee){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $stmt = $this->pdo->prepare("SELECT 
                                        p.id AS idPerson,
                                        p.firstName,
                                        p.middleName,
                                        IFNULL(p.lastName, '') AS lastName,
                                        p.email,
                                        p.phone,
                                        e.code,
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
            exit($this->databaseSelectQueryErrorMessage);
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
     */
    function proxyGetEmployeeDataById($idEmployee){
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $employeeData = $this->getEmployeeDataById($idEmployee);

        $response = array(
            "idPerson" => (int)$employeeData['idPerson'],
            "firstName" => $this->cryptographyService->decryptString($employeeData['firstName']),
            "middleName" => $this->cryptographyService->decryptString($employeeData['middleName']),

            "lastName" => strlen($employeeData['lastName']) > 0
                ? $this->cryptographyService->decryptString($employeeData['lastName'])
                : '',

            "email" => $this->cryptographyService->decryptString($employeeData['email']),
            "phone" => $employeeData['phone'],
            "code" => $employeeData['code'],
            "contractType" => $employeeData['contractType']

        );

        return $response;
    }

    /**
     * @param $code string
     * @return array
     */
    function getEmployeeDataByCode($code){
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

        $idEmployee = $this->getIdEmployeeTypeByCode($code);

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
        $idEmployee = $requestData['idEmployee'];
        $this->asserts->higherThanZero($idEmployee, "idEmployee must be higher than 0");

        $idPerson = $this->getIdPersonByIdEmployee($idEmployee);
        $this->asserts->higherThanZero($idPerson, "idPerson must be higher than 0");

        $code = $requestData['code'];
        $this->asserts->isNotEmpty($code, "The code can't be empty.");

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
            exit($this->databaseSelectQueryErrorMessage);
        }
        $stmt = null;

        return $results;
    }

    /**
     * @return array
     */
    function listAllActiveEmployees(){
        $ids = $this->getIdEmployeeFromAllActiveEmployees();

        $result = array();

        foreach($ids as $row){
            $result[] = $this->proxyGetEmployeeDataById($row['id']);
        }

        return $result;
    }
}
?>