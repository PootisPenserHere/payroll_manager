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

    /**
     * @param $string string
     * @param $array array
     * @param $errorMessage string
     * @throws Exception
     */
    function existInArray($string, $array, $errorMessage){
        if(!in_array($string, $array)){
            throw new Exception($errorMessage);
        }
    }

    /**
     * Compares two dates to dertermine if they have the same month
     *
     * @param $firstDate date
     * @param $secondDate date
     * @param $errorMessage string
     * @throws Exception
     */
    function datesHaveSameMonth($firstDate, $secondDate, $errorMessage){
        if (date("m",strtotime($firstDate)) != date("m",strtotime($secondDate))){
            throw new Exception($errorMessage);
        }
    }

    /**
     * @param $date
     * @param $errorMessage
     * @throws Exception
     */
    function dateIsNotInTheFuture($date, $errorMessage){
        if ($date > date('Y-m-d')){
            throw new Exception($errorMessage);
        }
    }
}
?>
