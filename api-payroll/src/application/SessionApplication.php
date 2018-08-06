<?php
namespace App\Application;

use Exception;

class SessionApplication{
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
     * @return bool
     */
    function verifySession(){
        return isset($_SESSION['userName']);
    }

    /**
     * @return array
     */
    function checkCurrentSession(){
        $session = array();

        $session['loggedIn'] = $this->verifySession();

        if($this->verifySession()){
            $session['userName'] = $_SESSION['userName'];
        }

        return $session;
    }

    /**
     * @param $userName string
     * @return mixed
     */
    function getPassword($userName){
        $this->asserts->userName($userName);

        $stmt = $this->pdo->prepare("SELECT password FROM users WHERE name = :userName");
        $stmt->execute(array(':userName' => $userName));
        $results = $stmt->fetchAll();
        if(!$results){
            exit($this->databaseSelectQueryErrorMessage);
        }
        $stmt = null;
        return $results[0]['password'];
    }

    /**
     * @param $userName string
     * @param $password string
     * @return bool
     * @throws Exception
     */
    function newSession($userName, $password){
        $this->asserts->userName($userName);
        $this->asserts->password($password);

        $storedPassword = $this->getPassword($userName);

        // If the credentials don't match anything in the the records
        if(!isset($storedPassword)){
            throw new Exception('The user or password didnt match, please try again.');
        }

        // Already has a session
        if($this->verifySession()){
            return true;
        }

        if($this->cryptographyService->decryptPassword($password, $storedPassword)){
            $_SESSION['userName'] = $userName;
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * @return string
     */
    function destroySession(){
        session_destroy();

        return "Sucessfully logged out.";
    }
}
?>