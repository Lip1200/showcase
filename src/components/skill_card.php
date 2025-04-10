<?php
/**
 * Skill Card Component
 * 
 * This component displays a single skill with its icon and optional name
 * Matches the original Next.js SkillDataProvider implementation
 * 
 * @param array $skill The skill data including image, width, height, and alt text
 * @param int $index The index of the skill for animation timing
 */

// Extract skill data
$image = $skill['image'] ?? '';
$width = $skill['width'] ?? 80;
$height = $skill['height'] ?? 80;
$alt = $skill['alt'] ?? '';
$name = $skill['name'] ?? $skill['skill_name'] ?? '';

// Calculate animation delay based on index - use a staggered approach for more visual impact
$delay = 100 + (150 * $index); // Start at 100ms and add 150ms per item
?>

<div class="animate-item animate-slide-bottom animate-on-scroll flex justify-center items-center"
     style="transition-delay: <?php echo $delay; ?>ms; animation-duration: 0.7s;">
    <div class="flex flex-col items-center justify-center rounded-full h-[120px] w-[120px] bg-[#0300145e] border border-[#7042f861] m-[5px] cursor-pointer group relative hover:border-[#7042f8] transition-all duration-300">
        
        <!-- Skill Icon -->
        <img 
            src="<?php echo htmlspecialchars($image); ?>" 
            alt="<?php echo htmlspecialchars($alt); ?>"
            width="<?php echo $width; ?>"
            height="<?php echo $height; ?>"
            class="object-contain animate-float"
            style="max-width: <?php echo $width; ?>px; max-height: <?php echo $height; ?>px;"
        />
        
        <!-- Skill Name (only visible on hover) -->
        <?php if (!empty($name)): ?>
        <div class="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0a0a] text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            <?php echo htmlspecialchars($name); ?>
        </div>
        <?php endif; ?>
    </div>
</div>
