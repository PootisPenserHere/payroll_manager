<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// Cryto functions
$container['cryptographyService'] = function ($c) {
    $cryptographySettings = $c->get('settings')['cryptography'];
    $cryptographyService = new App\Service\CryptographyService($cryptographySettings);
    return $cryptographyService;
};

// The session application
$container['sessionApplication'] = function ($c) {
    $cryptographySettings = $c->get('settings')['cryptography'];
    $cryptographyService = new App\Service\CryptographyService($cryptographySettings);

    $mysqlSettings = $c->get('settings')['mysql'];
    $sessionApplication = new App\Application\SessionApplication($mysqlSettings, $cryptographyService);
    return $sessionApplication;
};