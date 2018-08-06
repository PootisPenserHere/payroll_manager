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
    $RequestData = $request->getParsedBody();

    $data = $this->sessionApplication->newSession($RequestData['userName'], $RequestData['password']);

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($data));
});

$app->post('/api/session/logout', function (Request $request, Response $response, array $args) {
    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($this->sessionApplication->destroySession()));
});