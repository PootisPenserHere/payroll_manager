<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],

        // Session handle settings
        'session' => [
            // Session cookie settings
            'name'           => 'payroll-laziness-rocks',
            'lifetime'       => 10,
            'path'           => '/',
            'domain'         => null,
            'secure'         => false,
            'httponly'       => true,

            // Set session cookie path, domain and secure automatically
            'cookie_autoset' => true,

            // Path where session files are stored, PHP's default path will be used if set null
            'save_path'      => null,

            // Session cache limiter
            'cache_limiter'  => 'nocache',

            // Extend session lifetime after each user activity
            'autorefresh'    => true,

            // Encrypt session data if string is set
            'encryption_key' => '7de431684c34cf2c898268cff71392f38c4175dde050c9ee69502b81571484e0',

            // Session namespace
            'namespace'      => 'slim'
        ],

        // Cryptography settings
        'cryptography' => [
            'encryptionAlgorithm' => 'AES-256-CBC',
            'encryptionPassword' => '7de431684c34cf2c898268cff71392f38c4175dde050c9ee69502b81571484e0',
            'passwordHashCost' => '12',
            'ivSize' => 16, // 128 bits
        ],

        // Datanase settings
        'mysql' => [
            'host' => 'mysql',
            'port' => '3307',
            'database' => 'payroll',
            'user' => 'root',
            'password' => '12345678',
            'charset' => 'utf8',
            'pdoConnectionOptions' => [
                PDO::ATTR_EMULATE_PREPARES   => true, // The querys will be prepared by pdo instead of the dbms
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Errors will be returned as exceptions
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Data will be returned in associative arrays
            ],
            'databaseConnectionErrorMessage' => 'Unable to connect to the database.',
            'databaseSelectQueryErrorMessage' => 'There was an error fetching the data.',
            'databaseInsertQueryErrorMessage' => 'There was an error inserting the record.',
        ],

        // Employee settings
        'employee' => [
            'codeLength' => '3',
            'contractTypes' => array('INTERNO', 'EXTERNO'),
            'hoursPerWorkDay' => 8,
            'paymentPerHour' => 30,
            'bonusPerDelivery' => 5,
            'perHourBonusDriver' => 10,
            'perHourBonusLoader' => 5,
            'perHourBonusAux' => 0,
            'baseIsr' => .09,
            'extraIsr' => .03,
            'taxesAddUp' => true, // If true this will be total/(9 + 3) else they're subtracted separately
            'amountForExtraTaxes' => 16000,
            'vouchersForAllContractTypes' => false, // Outsourced personal won't get vouchers
            'percentOfPaymentForVouchers' => .04,
        ],
    ],
];
