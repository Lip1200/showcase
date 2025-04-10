<?php
/**
 * Project Data
 * 
 * This file contains arrays of project data
 */

// All projects information
$projects = [
    [
        'title' => 'AI-powered movie recommendation system with personalized lists.',
        'description' => "This project allows users to create personalized movie lists and receive real-time movie recommendations powered by AI. The recommendations adapt based on the content of the movie list as users add films, making suggestions more accurate over time.

This app is a second-year Bachelor's project and is composed of two main services: a Next.js front-end and a Flask back-end, both containerized via Docker. The back-end handles data with MySQL and provides AI recommendations using ChromaDB.",
        'image' => '/public/colormovie.png',
        'link' => 'https://github.com/Lip1200/color_movie',
        'technologies' => ['Next.js', 'Flask', 'Docker', 'MySQL', 'ChromaDB', 'AI']
    ],
    [
        'title' => 'OS programing',
        'description' => 'C programing focused on system calls, including file locking, file copying, and client-server architecture, culminating in the development of a custom shell capable of compiling itself.',
        'image' => '/public/wish.png',
        'link' => 'https://github.com/Lip1200/system-calls',
        'technologies' => ['C', 'System Programming', 'Shell']
    ],
    [
        'title' => 'Unity Game',
        'description' => 'Co-creation of a networked game using Unity. The game supports multiple players connected via a network, demonstrating complex real-time interactions and synchronization between clients.',
        'image' => '/public/game.png',
        'link' => 'https://gitlab.unige.ch/stm_game/game',
        'technologies' => ['Unity', 'C#', 'Networking']
    ],
    [
        'title' => 'Portfolio',
        'description' => 'This portfolio built with Next.js.',
        'image' => '/public/portfolio.png',
        'link' => 'https://github.com/Lip1200/showcase',
        'technologies' => ['Next.js', 'React', 'Tailwind CSS']
    ]
];

