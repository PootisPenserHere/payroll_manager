<?php
namespace App\Application;

use Exception;

class SessionApplication{
    private $session;
    private $pdo;
    private $cryptographyService;
    private $asserts;

    function __construct($session, $mysql, $cryptographyService, $asserts){
        $this->session = $session;
        $this->cryptographyService = $cryptographyService;
        $this->pdo = $mysql;
        $this->asserts = $asserts;
    }

    /**
     * @return bool
     */
    function verifySession(){
        $userName = $this->session->get('userName');
        return isset($userName);
    }

    /**
     * @return array
     */
    function checkCurrentSession(){
        $session = array();

        $session['loggedIn'] = $this->verifySession();

        if($this->verifySession()){
            $session['userName'] = $this->session->get('userName');
        }

        return $session;
    }

    /**
     * @param $userName string
     * @return mixed
     * @throws Exception
     */
    function getPassword($userName){
        $this->asserts->isNotEmpty($userName, "The username can't be empty");
        $this->asserts->isString($userName, "The username must be a string.");
        $this->asserts->betweenLength($userName, 1, 50, "The username must have a length between 1 and 50 characters.");

        $stmt = $this->pdo->prepare("SELECT password FROM users WHERE name = :userName");
        $stmt->execute(array(':userName' => $userName));
        $results = $stmt->fetchAll();
        if(!$results){
            throw new Exception('The user or password didnt match, please try again.');
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
        $this->asserts->isNotEmpty($userName, "The username can't be empty");
        $this->asserts->isString($userName, "The username must be a string.");
        $this->asserts->betweenLength($userName, 1, 50, "The username must have a length between 1 and 50 characters.");
        $this->asserts->isNotEmpty($password, "The password can't be empty");
        $this->asserts->isString($password, "The password must be a string.");
        $this->asserts->betweenLength($password, 1, 50, "The password must have a length between 1 and 50 characters.");

        $storedPassword = $this->getPassword($userName);

        // If the credentials don't match anything in the the records
        if(!isset($storedPassword)){
            return false;
        }

        // Already has a session
        if($this->verifySession()){
            return true;
        }

        if($this->cryptographyService->decryptPassword($password, $storedPassword)){
            $this->session->set('userName', $userName);

            if(!$this->verifySession()){
                throw new Exception('An error occurred while trying to create the session.');
            }

            return true;
        }
        else{
            throw new Exception('The user or password didnt match, please try again.');
        }
    }

    /**
     * @param $userName
     * @param $password
     * @return array
     * @throws Exception
     */
    function login($userName, $password){
        $this->asserts->isNotEmpty($userName, "The username can't be empty");
        $this->asserts->isString($userName, "The username must be a string.");
        $this->asserts->betweenLength($userName, 1, 50, "The username must have a length between 1 and 50 characters.");
        $this->asserts->isNotEmpty($password, "The password can't be empty");
        $this->asserts->isString($password, "The password must be a string.");
        $this->asserts->betweenLength($password, 1, 50, "The password must have a length between 1 and 50 characters.");


        if($this->newSession($userName, $password)){
            return array('status' => 'success', 'message' => 'Logged in successfully.');
        }
        else{
            throw new Exception('The user or password didnt match, please try again.');
        }
    }

    /**
     * @return array
     * @throws Exception
     */
    function destroySession(){
        $this->session->clear();

        if($this->verifySession()){
            throw new Exception('An error occurred while trying to end the session.');
        }

        return array('status' => 'success', 'message' => 'Successfully logged out.');
    }
}
?>