<?php
/**
 * A collection of functions to securely handling sensitive data,
 * passwords as well as making use of other crypto needs within
 * the project
 *
 * @property  settings
*/

class cryptographyService{

    function __construct($cryptographySettings) {
        $this->settings = $cryptographySettings;
    }

    /**
     * Encrypts a string using the predefined algorithm, the resulting string will contain the
     * concatenated iv used for salting as well as the cipher text, both in hex format
     *
     * @param $text string
     * @return string
     * @throws Exception
     */
    function encryptString($text){
        try {
            $iv = random_bytes($this->settings['ivSize']);
            $ivInHex = bin2hex($iv);

            $encryptedMessage = openssl_encrypt($text, $this->settings['encryptionAlgorithm'],
                $this->settings['encryptionPassword'], 1, $iv);

            $hexedCipherText = bin2hex($encryptedMessage);

            return "$ivInHex$hexedCipherText";
        } catch (Exception $e) {
            throw new Exception('There was an error encrypting the string, contact the system administrator.');
            $this->logger->warning("There was an error in the cryptographyService->encryptString caused by: $e ");
        }
    }

    /**
    * Decrypts a string using the predefined algorithm
     * 
     * This method assumes that an iv with the length taken from the setting ivSize is present
     * at the beginning of the string and this will be used to decrypt the cipher text
     *
     * @param $cipherText string
     * @return string
    */
    function decryptString($cipherText) {
        $cipherText = hex2bin($cipherText);

        $totalCharaters = strlen($cipherText);
        $iv = substr($cipherText, 0, $this->settings['ivSize']);
        $cipherTextWithIv = substr($cipherText, $this->settings['ivSize'], $totalCharaters);

        return openssl_decrypt($cipherTextWithIv, $this->settings['encryptionAlgorithm'],
            $this->settings['encryptionPassword'], 1, $iv);
    }

    /**
     * Securely hashes a password for its coldstorage
     *
     * @param $password string
     * @return string
     */
    function encryptPassword($password) {
        $options = [
            'cost' => $this->settings['passwordHashCost'],
        ];

        return password_hash($password, PASSWORD_BCRYPT, $options);
    }

    /**
     * Compares a password given in plain text against the encrypted veersion to determined if they're
     * the same password
     *
     * @param $plainPassword string
     * @param $encryptedPassword string
     * @return boolean
    */
    function decryptPassword($plainPassword, $encryptedPassword) {
        return password_verify($plainPassword, $encryptedPassword);
    }
}