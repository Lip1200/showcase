<?php
/**
 * Footer component
 * 
 * This component displays the footer with social links and copyright information
 */
global $config;
?>
<div class="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
    <div class="w-full flex flex-col items-center justify-center m-auto">
        <!-- About Section -->
        <div class="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div class="font-bold text-[16px]">About</div>

            <!-- Social Icons with Labels -->
            <div class="flex flex-row items-center justify-center space-x-6 my-[15px]">
                <!-- LinkedIn -->
                <a href="<?php echo htmlspecialchars($config['social']['linkedin']); ?>" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors">
                    <div class="flex flex-row items-center">
                        <i class="fab fa-linkedin text-2xl"></i>
                        <span class="ml-[6px]">LinkedIn</span>
                    </div>
                </a>
                
                <!-- GitHub -->
                <a href="<?php echo htmlspecialchars($config['social']['github']); ?>" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors">
                    <div class="flex flex-row items-center">
                        <i class="fab fa-github text-2xl"></i>
                        <span class="ml-[6px]">GitHub</span>
                    </div>
                </a>
                
                <!-- GitLab -->
                <a href="<?php echo htmlspecialchars($config['social']['gitlab']); ?>" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors">
                    <div class="flex flex-row items-center">
                        <i class="fab fa-gitlab text-2xl"></i>
                        <span class="ml-[6px]">GitLab</span>
                    </div>
                </a>
            </div>

            <!-- Contact Link -->
            <p class="my-[15px]">
                <a href="mailto:<?php echo htmlspecialchars($config['social']['email']); ?>" 
                   class="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors">
                    Contact
                </a>
            </p>
        </div>

        <!-- Footer Text/Copyright -->
        <div class="mb-[20px] text-[15px] text-center">
            <?php echo htmlspecialchars($config['site']['author']); ?> <?php echo date('Y'); ?> MIT
        </div>
    </div>
</div>

