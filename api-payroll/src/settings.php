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
    ],
];
