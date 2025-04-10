<?php
/**
 * Main entry point for the PHP Showcase portfolio
 * 
 * This file serves as the single entry point for the application
 * All requests are routed through this file
 */

// Load configuration
require_once __DIR__ . '/config/config.php';

// Load router
require_once __DIR__ . '/src/includes/router.php';

// Initialize router
$router = new Router();

// Get the current URI path
$uri = $_SERVER['REQUEST_URI'];
$uri = parse_url($uri, PHP_URL_PATH);
$uri = trim($uri, '/');

// If URI is empty, default to home
if (empty($uri)) {
    $uri = 'home';
}

// Route to appropriate template
try {
    // Set a default route to home if no specific section is requested
    if ($uri === 'home') {
        $router->route('home');
    } else {
        $router->route($uri);
    }
} catch (Exception $e) {
    // Display error page
    http_response_code(404);
    require_once __DIR__ . '/src/templates/404.php';
}

