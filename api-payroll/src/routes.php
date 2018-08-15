<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/api/session', function (Request $request, Response $response, array $args) {
    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->sessionApplication->checkCurrentSession()));
});

$app->post('/api/session/login', function ($request, $response) {
    $requestData = $request->getParsedBody();

    $data = $this->sessionApplication->login($requestData['userName'], $requestData['password']);

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($data));
});

$app->get('/api/session/logout', function (Request $request, Response $response, array $args) {
    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->sessionApplication->destroySession()));
});

$app->get('/api/employee/types', function (Request $request, Response $response, array $args) {
    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->listEmployeeTypes()));
});

$app->get('/api/employee/find/{partialName}', function (Request $request, Response $response, array $args) {
    $partialName = $args['partialName'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->findEmployeeByFullName($partialName)));
});

$app->post('/api/employee', function ($request, $response) {
    $requestData = $request->getParsedBody();

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->saveNewEmployee($requestData)));
});

$app->put('/api/employee', function ($request, $response) {
    $requestData = $request->getParsedBody();

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->updateEmployeeData($requestData)));
});

$app->DELETE('/api/employee/{idEmployee}', function (Request $request, Response $response, array $args) {
    $idEmployee = $args['idEmployee'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->disableEmployeeRecord($idEmployee)));
});

$app->get('/api/employee/type/{code}', function (Request $request, Response $response, array $args) {
    $code = $args['code'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->getIdEmployeeTypeByCode($code)));
});

$app->get('/api/employee/id/{idEmployee}', function (Request $request, Response $response, array $args) {
    $idEmployee = $args['idEmployee'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->proxyGetEmployeeDataById($idEmployee)));
});

$app->get('/api/employee/code/{code}', function (Request $request, Response $response, array $args) {
    $code = $args['code'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->getEmployeeDataByCode($code)));
});

$app->post('/api/employee/workday', function ($request, $response) {
    $requestData = $request->getParsedBody();

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->newWorkedDay($requestData)));
});

$app->get('/api/employee/salary/{code}', function (Request $request, Response $response, array $args) {
    $code = $args['code'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->calculateSalaryByCode($code)));
});

$app->get('/api/employee/salary/date/{date}/code/{code}', function (Request $request, Response $response, array $args) {
    $date = $args['date'];
    $code = $args['code'];

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->employeeApplication->getDataWorkDayByDateAndCode($date, $code)));
});
