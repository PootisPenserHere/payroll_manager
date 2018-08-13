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
        ],
    ],
];
