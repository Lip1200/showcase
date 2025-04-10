<?php
/**
 * Projects Component
 * 
 * This component displays all projects in a grid layout
 */

// Include project data if not already included
require_once BASE_PATH . '/src/includes/project_data.php';
?>

<div class="flex flex-col items-center justify-center py-10">
    <!-- Projects Header -->
    <h1 class="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
    </h1>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <?php foreach ($projects as $index => $project): ?>
            <?php 
            // Include the project card component
            include BASE_PATH . '/src/components/project_card.php'; 
            ?>
        <?php endforeach; ?>
    </div>
</div>

