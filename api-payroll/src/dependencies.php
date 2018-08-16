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

// Session handler
$container['session'] = function ($container) {
    return new \Adbar\Session(
        $container->get('settings')['session']['namespace']
    );
};

// Mysql connection
$container['mysql'] = function ($c) {
    $mysqlSettings = $c->get('settings')['mysql'];

    // The database parameters
    $host = $mysqlSettings['host'];
    $port = $mysqlSettings['port'];
    $database = $mysqlSettings['database'];
    $user = $mysqlSettings['user'];
    $password = $mysqlSettings['password'];
    $charset = $mysqlSettings['charset'];
    $pdoConnectionOptions = $mysqlSettings['pdoConnectionOptions'];

    // Generic error messages
    $databaseConnectionErrorMessage = $mysqlSettings['databaseConnectionErrorMessage'];

    // Initiate the connection
    $dsn = "mysql:host=$host;port=$port;dbname=$database;charset=$charset";
    try {
        $pdo = new PDO($dsn, $user, $password, $pdoConnectionOptions);
    } catch (Exception $e) {
        error_log($e->getMessage());
        exit($databaseConnectionErrorMessage);
    }
    return $pdo;
};

// Cryto functions
$container['cryptographyService'] = function ($c) {
    $cryptographySettings = $c->get('settings')['cryptography'];
    $cryptographyService = new App\Service\CryptographyService($cryptographySettings);
    return $cryptographyService;
};

// Assert functions
$container['asserts'] = function ($c) {
    $asserts = new App\Service\Asserts();
    return $asserts;
};

// The session application
$container['sessionApplication'] = function ($c) {
    $sessionApplication = new App\Application\SessionApplication($c['session'], $c['mysql'],
        $c['cryptographyService'], $c['asserts']);
    return $sessionApplication;
};

// The employee application
$container['employeeApplication'] = function ($c) {
    $employeeSettings = $c->get('settings')['employee'];
    $employeeApplication = new App\Application\EmployeeApplication($employeeSettings,
        $c['mysql'], $c['cryptographyService'], $c['asserts'], $c['sessionApplication']);
    return $employeeApplication;
};
