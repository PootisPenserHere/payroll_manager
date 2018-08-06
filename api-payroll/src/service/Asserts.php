<?php
namespace App\Service;

use Exception;
use Respect\Validation\Validator as v;

class Asserts{
    /**
     * @param $string
     * @throws Exception
     */
    function userName($string){
        $validateFirstName = v::stringType()->notEmpty()->length(1, 50)->validate($string);

        if(!$validateFirstName){
            throw new Exception('The user name must be a string between 1 and 50 characters');
        }
    }

    /**
     * @param $string
     * @throws Exception
     */
    function password($string){
        $validateFirstName = v::stringType()->notEmpty()->length(1, 50)->validate($string);

        if(!$validateFirstName){
            throw new Exception('The password must be a string between 1 and 50 characters');
        }
    }

    /**
     * @param $string
     * @throws Exception
     */
    function firstName($string){
        $validateFirstName = v::stringType()->notEmpty()->length(1, 100)->validate($string);

        if(!$validateFirstName){
            throw new Exception('The first name must be a string between 1 and 100 characters');
        }
    }

    /**
     * @param $string
     * @throws Exception
     */
    function middleName($string){
        if(!v::stringType()->notEmpty()->length(1, 100)->validate($string)){
            throw new Exception('The middle name must be a string between 1 and 100 characters');
        }
    }

    /**
     * @param $string
     * @throws Exception
     */
    function birthDate($string){
        if(!v::date('Y-m-d')->notEmpty()->validate($string)){
            throw new Exception('The birth date must be in the yyyy-mm-dd format');
        }
    }

    /**
     * @param $string
     * @throws Exception
     */
    function email($string){
        if(!v::stringType()->notEmpty()->length(1, 100)->validate($string)){
            throw new Exception('The email must be a string between 1 and 100 characters');
        }
    }

    /**
     * @param $string
     * @throws Exception
     */
    function phone($string){
        if(!v::digit()->notEmpty()->length(10, 10)->validate($string)){
            throw new Exception('The phone must be a numeric value of 10 digits');
        }
    }
}
?>
