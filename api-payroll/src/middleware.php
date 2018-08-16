<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

// Enable cors
$app->add(new \Tuupola\Middleware\Cors([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "headers.allow" => ["Accept", "Content-Type"],
    "headers.expose" => [],
    "credentials" => false,
    "cache" => 0,
    "logger" => $container['logger'],
    "error" => function ($request, $response, $arguments) {
        $data["status"] = "error";
        $data["message"] = $arguments["message"];
        return $response
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));

$app->add(new \Adbar\SessionMiddleware($app->getContainer()->get('settings')['session']));