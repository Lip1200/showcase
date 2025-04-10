<?php
/**
 * Configuration settings for the PHP Showcase portfolio
 */

// Define base path and URL constants
define('BASE_PATH', __DIR__ . '/..');
// Ensure BASE_URL is set correctly for the development server
define('BASE_URL', 'http://' . (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost:8000'));

// Site information
$config = [
    'site' => [
        'title' => "Filipe's portfolio",
        'description' => "Modern curriculum vitae and portfolio",
        'author' => 'Filipe Ramos',
        'language' => 'en'
    ],
    
    // Sections of the site
    'sections' => [
        'about-me' => [
            'title' => 'About Me',
            'template' => 'about.php'
        ],
        'skills' => [
            'title' => 'Skills',
            'template' => 'skills.php'
        ],
        'projects' => [
            'title' => 'Projects',
            'template' => 'projects.php'
        ],
        'cv' => [
            'title' => 'CV',
            'template' => 'cv.php'
        ],
        'home' => [
            'title' => 'Home',
            'template' => 'home.php'
        ]
    ],
    
    // Social media links
    'social' => [
        'email' => '***REMOVED***',
        'linkedin' => 'https://www.linkedin.com/in/lip1200',
        'github' => 'https://github.com/Lip1200',
        'gitlab' => 'https://gitlab.unige.ch/Filipe.Ramos'
    ]
];

// Error handling
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set timezone
date_default_timezone_set('Europe/Zurich');

