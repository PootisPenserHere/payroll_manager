<?php
namespace App\Service;

use Exception;
use Respect\Validation\Validator as v;

class Asserts{
    /**
     * @param $string string
     * @param $errorMessage string
     * @throws Exception
     */
    function isString($string, $errorMessage){
        $validation = v::stringType()->validate($string);

        if(!$validation){
            throw new Exception($errorMessage);
        }
    }

    /**
     * @param $string string
     * @param $errorMessage string
     * @throws Exception
     */
    function isNotEmpty($string, $errorMessage){
        $validation = v::notEmpty()->validate($string);

        if(!$validation){
            throw new Exception($errorMessage);
        }
    }

    /**
     * @param $string string
     * @param $min integer
     * @param $max integer
     * @param $errorMessage string
     * @throws Exception
     */
    function betweenLength($string, $min, $max, $errorMessage){
        $validation = v::length($min, $max)->validate($string);

        if(!$validation){
            throw new Exception($errorMessage);
        }
    }

    /**
     * @param $number integer
     * @param $errorMessage string
     * @throws Exception
     */
    function higherThanZero($number, $errorMessage){
        if($number <= 0){
            throw new Exception($errorMessage);
        }
    }

    /**
     * Compares a string against a regex to determine if it's an email
     *
     * @param $string string
     * @param $errorMessage string
     * @throws Exception
     */
    function isEmail($string, $errorMessage){
        if(!filter_var($string, FILTER_VALIDATE_EMAIL)){
            throw new Exception($errorMessage);
        }
    }
}
?>
