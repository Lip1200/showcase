<?php
/**
 * CV Data
 * 
 * This file contains structured data about professional experience, education, and skills for the CV
 */

// Personal information
$personal_info = [
    'name' => 'Filipe Ramos',
    'title' => 'IT Specialist & Final-Year Student',
    'email' => '***REMOVED***',
    'location' => 'Geneva, Switzerland',
    'summary' => 'Final-year IT student with experience in web development, data science, and system programming. Fast learner and AI enthusiast working on IBM AI Engineer certification.'
];

// Education
$education = [
    [
        'degree' => 'Bachelor of Science in Information Technology',
        'institution' => 'University of Geneva',
        'location' => 'Geneva, Switzerland',
        'period' => '2021 - Present',
        'description' => 'Focusing on web development, data science, and system programming. Notable projects include AI-powered movie recommendation system and networked game development.'
    ],
    [
        'degree' => 'Technical Certificate in Computer Science',
        'institution' => 'Technical Institute',
        'location' => 'Geneva, Switzerland',
        'period' => '2019 - 2021',
        'description' => 'Foundational studies in computer science with emphasis on programming and system architecture.'
    ]
];

// Work Experience
$experience = [
    [
        'position' => 'Software Development Intern',
        'company' => 'Tech Solutions Geneva',
        'location' => 'Geneva, Switzerland',
        'period' => 'Summer 2024',
        'description' => 'Worked on developing web applications using Next.js and Flask. Implemented database solutions and contributed to containerization efforts using Docker.',
        'technologies' => ['Next.js', 'Flask', 'Docker', 'MySQL']
    ],
    [
        'position' => 'Student Research Assistant',
        'company' => 'University of Geneva IT Department',
        'location' => 'Geneva, Switzerland',
        'period' => '2023 - 2024',
        'description' => 'Assisted in developing data analysis tools for research projects. Worked with Python and data visualization libraries.',
        'technologies' => ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization']
    ]
];

// Skills organized by category
$cv_skills = [
    'Programming Languages' => ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'Scala'],
    'Web Development' => ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind CSS'],
    'Backend & Databases' => ['Flask', 'MySQL', 'GraphQL', 'SQLAlchemy'],
    'Tools & Platforms' => ['Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab'],
    'Data Science' => ['Pandas', 'Scikit-learn', 'ChromaDB', 'Data Visualization']
];

// Certifications and additional qualifications
$certifications = [
    [
        'name' => 'IBM AI Engineer (In Progress)',
        'issuer' => 'IBM',
        'date' => 'Expected 2025'
    ],
    [
        'name' => 'Python for Data Science',
        'issuer' => 'Coursera',
        'date' => '2023'
    ]
];

// Languages
$languages = [
    'English' => 'Fluent',
    'French' => 'Native',
    'Portuguese' => 'Native',
    'Spanish' => 'Intermediate'
];

