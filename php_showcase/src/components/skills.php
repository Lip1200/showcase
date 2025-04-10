<?php
/**
 * Skills Component
 * 
 * This component displays all skill categories with their respective skills
 */

// Include skill data if not already included
require_once BASE_PATH . '/src/includes/skill_data.php';
?>

<section class="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-10" style="transform: scale(0.9)">
    <!-- Skills Header -->
    <div class="w-full h-auto flex flex-col items-center justify-center">
        <div class="animate-item animate-slide-top animate-on-scroll Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center rounded-full">
            <i class="fas fa-sparkles text-[#b49bff] mr-[10px] h-5 w-5"></i>
            <h3 class="Welcome-text text-[13px]">Quick learner &nbsp;</h3>
        </div>
        
        <div class="animate-item animate-slide-left animate-on-scroll animate-delay-500 text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
            Diving into the future, fueled by a love for exploring new tech.
        </div>
        
        <div class="animate-item animate-slide-right animate-on-scroll animate-delay-500 text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
            My go-to skills
        </div>
    </div>
    
    <!-- Skill Categories -->
    <?php foreach ($skill_categories as $categoryIndex => $category): ?>
        <div class="w-full">
            <!-- Skills Grid - Note: Category titles are hidden as per original Next.js design -->
            <div class="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                <?php foreach ($category['skills'] as $index => $skill): ?>
                    <?php 
                    // Include the skill card component
                    include BASE_PATH . '/src/components/skill_card.php'; 
                    ?>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endforeach; ?>
</section>

