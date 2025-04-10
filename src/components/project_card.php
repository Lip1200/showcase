<?php
/**
 * Project Card Component
 * 
 * This component displays a single project with its image, title, and description
 * 
 * @param array $project The project data including title, description, image, and link
 * @param int $index The index of the project for animation timing
 */

// Extract project data
$title = $project['title'] ?? '';
$description = $project['description'] ?? '';
$image = $project['image'] ?? '';
$link = $project['link'] ?? '#';
$technologies = $project['technologies'] ?? [];

// Calculate animation delay based on index
$delay = 200 + ($index * 100);
?>

<div class="animate-item animate-slide-bottom animate-on-scroll rounded-lg overflow-hidden border border-[#7042f861] bg-[#0300145e]"
     style="transition-delay: <?php echo $delay; ?>ms;">
    
    <!-- Project Image -->
    <div class="relative h-[200px] w-full overflow-hidden">
        <img 
            src="<?php echo htmlspecialchars($image); ?>" 
            alt="<?php echo htmlspecialchars($title); ?>"
            class="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
    </div>
    
    <!-- Project Content -->
    <div class="p-6">
        <!-- Project Title -->
        <h3 class="text-xl font-semibold text-white mb-3">
            <?php echo htmlspecialchars($title); ?>
        </h3>
        
        <!-- Project Description -->
        <p class="text-gray-400 mb-4 text-sm h-[120px] overflow-y-auto">
            <?php echo nl2br(htmlspecialchars($description)); ?>
        </p>
        
        <!-- Technologies Used -->
        <?php if (!empty($technologies)): ?>
        <div class="flex flex-wrap gap-2 mb-4">
            <?php foreach ($technologies as $tech): ?>
            <span class="bg-[#7042f818] text-[#b49bff] text-xs px-2 py-1 rounded">
                <?php echo htmlspecialchars($tech); ?>
            </span>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>
        
        <!-- Project Link -->
        <a href="<?php echo htmlspecialchars($link); ?>" 
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-block py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:opacity-90 transition-opacity">
            View Project
        </a>
    </div>
</div>

