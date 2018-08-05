<?php

class SessionApplication{
    // The to be connection
    private $pdo = '';
    private $cryptographyService;

    function __construct($mysqlSettings, $cryptographyService){
        // Services
        $this->cryptographyService = $cryptographyService;

        // The database parameters
        $this->host = $mysqlSettings['host'];
        $this->database = $mysqlSettings['database'];
        $this->user = $mysqlSettings['user'];
        $this->password = $mysqlSettings['password'];
        $this->charset = $mysqlSettings['charset'];
        $this->pdoConnectionOptions = $mysqlSettings['pdoConnectionOptions'];

        // Generic error messages
        $this->databaseConnectionErrorMessage = $mysqlSettings['databaseConnectionErrorMessage'];
        $this->databaseSelectQueryErrorMessage = $mysqlSettings['databaseSelectQueryErrorMessage'];
        $this->databaseInsertQueryErrorMessage = $mysqlSettings['databaseInsertQueryErrorMessage'];

        // Initiate the connection
        $dsn = "mysql:host=$this->host;dbname=$this->database;charset=$this->charset";
        try {
            $this->pdo = new PDO($dsn, $this->user, $this->password, $this->pdoConnectionOptions);
        } catch (Exception $e) {
            error_log($e->getMessage());
            exit($this->databaseConnectionErrorMessage);
        }
    }

    function newSession($userName, $password){
        $real = 'slothness';
        $password = "$2y$12$51mfESaLEGXDT4u9Bd9kiOHEpaJ1Bx4SEcVwsU5K6jVPMNkrnpJAa";

        if($this->cryptographyService->decryptPassword($real, $password)){
            return "yea";
        }
        else{
            "nah";
        }
    }
}
?>