<?php
namespace App\Application;

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

        return $results;
    }

    /**
     * @param $firstName varbinary
     * @param $middleName varbinary
     * @param $lastName varbinary or null
     * @param $birthDate date yyyy-mm-dd
     * @param $email string
     * @param $phone string
     * @return integer
     */
    function saveNewPerson($firstName, $middleName, $lastName, $birthDate, $email, $phone){
        $this->asserts->firstName($firstName);
        $this->asserts->middleName($middleName);
        $this->asserts->birthDate($birthDate);
        $this->asserts->email($email);
        $this->asserts->phone($phone);

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
        $this->asserts->firstName($firstName);

        $middleName = $requestData['middleName'];
        $this->asserts->middleName($middleName);

        $lastName = isset($requestData['lastName']) ? $requestData['lastName'] : null;

        $birthDate = $requestData['birthDate'];
        $this->asserts->birthDate($birthDate);

        $email = $requestData['email'];
        $this->asserts->email($email);

        $phone = $requestData['phone'];
        $this->asserts->phone($phone);

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
     * @param $code
     * @return mixed
     */
    function getIdEmployeeTypeByCode($code){
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
}
?>