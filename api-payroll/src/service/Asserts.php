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
}
?>
