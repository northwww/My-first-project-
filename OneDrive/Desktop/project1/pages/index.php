<?php
$routes = [
    "/" => ["title" => "Головна", "file" => "home.php"],
    "/login" => ["title" => "Логін", "file" => "login.php"],
    "/registr" => ["title" => "Реєстрація", "file" => "registr.php"],
];

// 1) Отримуємо URL-шлях (наприклад /login)
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// 2) Нормалізуємо
if ($path === '/index.php') {
    $path = '/';
}
$path = rtrim($path, '/');
if ($path === '') {
    $path = '/';
}

// 3) Якщо шлях є в маршрутах → підключаємо потрібний файл
if (isset($routes[$path])) {
    $title = $routes[$path]['title'];
    include $routes[$path]['file'];
} else {
    http_response_code(404);
    $title = "Сторінка не знайдена";
    include "404.php";
}
