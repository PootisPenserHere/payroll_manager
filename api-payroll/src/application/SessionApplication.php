<?php

class SessionApplication{
    // The to be connection
    private $pdo = '';
    private $cryptographyService;

    function __construct($mysql, $cryptographyService){
        // Services
        $this->cryptographyService = $cryptographyService;
        $this->pdo = $mysql;
    }

    function newSession($userName, $password){
        $real = 'slothness';
        $password = "$2y$12$51mfESaLEGXDT4u9Bd9kiOHEpaJ1Bx4SEcVwsU5K6jVPMNkrnpJAa";

        if($this->cryptographyService->decryptPassword($real, $password)){
            return "yea";
        }
        else{
            return "nay";
        }
    }
}
?>