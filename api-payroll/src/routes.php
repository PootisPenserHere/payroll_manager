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


$app->post('/api/session/login', function ($request, $response) {
    $RequestData = $request->getParsedBody();

    $data = $this->sessionApplication->newSession($RequestData['userName'], $RequestData['password']);

    return $response->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write(json_encode($data));
});


$app->get('/api/encrypt/{string}', function (Request $request, Response $response, array $args) {
    return $this->cryptographyService->encryptString($args['string']);
});

$app->get('/api/decrypt/{string}', function (Request $request, Response $response, array $args) {
    return $this->cryptographyService->decryptString($args['string']);
});

$app->get('/api/encrypt/password/{string}', function (Request $request, Response $response, array $args) {
    return $this->cryptographyService->encryptPassword($args['string']);
});

$app->get('/api/decrypt/password/{string}', function (Request $request, Response $response, array $args) {
    $cosa = $this->cryptographyService->decryptPassword("pablso", "$2y$12$4T.gxWkQNPPFQau7ghfiQegdJQOm1yLTlbOTvcI3AizyqF/JSHr06");
    if ($cosa){
        return "yea";
    }
});