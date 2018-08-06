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
}
?>