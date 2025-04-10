<?php
/**
 * Skill Data
 * 
 * This file contains arrays of skill data matching the original Next.js implementation
 */

// Data Science/AI Skills
$skill_data = [
    [
        'name' => 'Pandas',
        'image' => BASE_URL . '/assets/images/pandas.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Pandas logo',
    ],
    [
        'name' => 'ChromaDB',
        'image' => BASE_URL . '/assets/images/chromadb.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'ChromaDB logo',
    ],
];

// Social Media Links - Fixed paths to match original
$socials = [
    [
        'name' => 'Discord',
        'src' => BASE_URL . '/assets/images/social/discord.svg',
    ],
    [
        'name' => 'Facebook',
        'src' => BASE_URL . '/assets/images/social/facebook.svg',
    ],
    [
        'name' => 'Instagram',
        'src' => BASE_URL . '/assets/images/social/instagram.svg',
    ],
];

// Frontend Skills
$frontend_skills = [
    [
        'name' => 'HTML5',
        'image' => BASE_URL . '/assets/images/html.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'HTML5 logo',
    ],
    [
        'name' => 'CSS3',
        'image' => BASE_URL . '/assets/images/css.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'CSS logo',
    ],
    [
        'name' => 'JavaScript',
        'image' => BASE_URL . '/assets/images/js.png',
        'width' => 65,
        'height' => 65,
        'alt' => 'JavaScript logo',
    ],
    [
        'name' => 'Tailwind CSS',
        'image' => BASE_URL . '/assets/images/tailwind.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Tailwind CSS logo',
    ],
    [
        'name' => 'TypeScript',
        'image' => BASE_URL . '/assets/images/ts.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'TypeScript logo',
    ],
    [
        'name' => 'Next.js',
        'image' => BASE_URL . '/assets/images/next.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Next.js logo',
    ],
];

// Backend Skills
$backend_skills = [
    [
        'name' => 'MySQL',
        'image' => BASE_URL . '/assets/images/mysql.png',
        'width' => 70,
        'height' => 70,
        'alt' => 'MySQL logo',
    ],
    [
        'name' => 'GraphQL',
        'image' => BASE_URL . '/assets/images/graphql.png',
        'width' => 70,
        'height' => 70,
        'alt' => 'GraphQL logo',
    ],
    [
        'name' => 'Flask',
        'image' => BASE_URL . '/assets/images/flask-logo.png',
        'width' => 100,
        'height' => 100,
        'alt' => 'Flask logo',
    ],
    [
        'name' => 'Python',
        'image' => BASE_URL . '/assets/images/python.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Python language logo',
    ],
];

// Full Stack Skills
$full_stack = [
    [
        'name' => 'Docker',
        'image' => BASE_URL . '/assets/images/docker.webp',
        'width' => 80,
        'height' => 80,
        'alt' => 'Docker logo',
    ],
    [
        'name' => 'Kubernetes',
        'image' => BASE_URL . '/assets/images/kubernetes.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Kubernetes logo',
    ],
    [
        'name' => 'Figma',
        'image' => BASE_URL . '/assets/images/figma.png',
        'width' => 50,
        'height' => 50,
        'alt' => 'Figma logo',
    ],
];

// Other Programming Languages/Skills
$other_skills = [
    [
        'name' => 'C',
        'image' => BASE_URL . '/assets/images/c.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'C language logo',
    ],
    [
        'name' => 'C++',
        'image' => BASE_URL . '/assets/images/cpp.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'C++ language logo',
    ],
    [
        'name' => 'Java',
        'image' => BASE_URL . '/assets/images/java.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Java language logo',
    ],
    [
        'name' => 'Scala',
        'image' => BASE_URL . '/assets/images/scala.png',
        'width' => 80,
        'height' => 80,
        'alt' => 'Scala language logo',
    ],
    [
        'name' => 'SQLAlchemy',
        'image' => BASE_URL . '/assets/images/sqlalchemy-logo.png',
        'width' => 100,
        'height' => 100,
        'alt' => 'SQLAlchemy logo',
    ],
    [
        'name' => 'Scikit-learn',
        'image' => BASE_URL . '/assets/images/scikit-learn.png',
        'width' => 100,
        'height' => 100,
        'alt' => 'Scikit-learn logo',
    ],
];

// All skill categories for easy iteration - following the original Next.js arrangement
$skill_categories = [
    [
        'name' => 'Main Skills',
        'skills' => $skill_data
    ],
    [
        'name' => 'Frontend',
        'skills' => $frontend_skills
    ],
    [
        'name' => 'Backend',
        'skills' => $backend_skills
    ],
    [
        'name' => 'Full Stack',
        'skills' => $full_stack
    ],
    [
        'name' => 'Other Skills',
        'skills' => $other_skills
    ]
];
