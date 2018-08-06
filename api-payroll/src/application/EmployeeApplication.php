<?php
namespace App\Application;

class EmployeeApplication{
    private $pdo;
    private $cryptographyService;
    private $asserts;

    function __construct($mysql, $cryptographyService, $asserts){
        $this->cryptographyService = $cryptographyService;
        $this->pdo = $mysql;
        $this->asserts = $asserts;

        $this->databaseSelectQueryErrorMessage = 'There was an error inserting the record.';
    }

    /**
     * @return array
     */
    function listEmployeeTypes(){
        $stmt = $this->pdo->prepare("SELECT id, name  FROM employeeType WHERE status = 'ACTIVE'");
        $stmt->execute();

        $results = $stmt->fetchAll();

        if(!$results){
            exit($this->databaseSelectQueryErrorMessage);
        }
        $stmt = null;

        return $results;
    }

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

        $employeeType = $requestData{'employeeType'};
        $contractType = $requestData{'contractType'};

        // Encrypting the sensitive data
        $securedFirstName = $this->cryptographyService->encryptString($firstName);
        $securedMiddleName = $this->cryptographyService->encryptString($middleName);

        if(isset($lastName)){
            $securedLastName = $this->cryptographyService->encryptString($lastName);
        }
        else {
            $securedLastName = null;
        }

        $securedEmail = $this->cryptographyService->encryptString($email);

        $idNewperson = $this->saveNewPerson($securedFirstName, $securedMiddleName, $securedLastName,
            $birthDate, $securedEmail, $phone);

        return $idNewperson;
    }
}
?>