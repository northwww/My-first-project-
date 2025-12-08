<?php

require __DIR__ . '/vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Symfony\Component\VarDumper\VarDumper;
use GuzzleHttp\Client;

$log = new Logger('my-log');
$log->pushHandler(new StreamHandler(__DIR__ . '/app.log', Logger::INFO));
$log->info('Monolog работает!');


VarDumper::dump(['status' => 'VarDumper работает!']);

$client = new Client();
$response = $client->get('https://api.github.com/');
echo $response->getStatusCode();
