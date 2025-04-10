<?php
/**
 * Navigation bar component
 * 
 * This component displays the top navigation bar with logo, navigation links, and social media icons
 */
global $config;
?>
<div class="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    <div class="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <!-- Logo and Name -->
        <a href="<?php echo Router::url('home'); ?>#about-me" class="h-auto w-auto flex flex-row items-center">
            <img src="/public/UnigeLogo.png" alt="logo" width="40" height="40" class="cursor-pointer hover:animate-slowspin">
            <span class="font-bold ml-[10px] hidden md:block text-gray-300">
                <?php echo htmlspecialchars($config['site']['author']); ?>
            </span>
        </a>

        <!-- Navigation Links -->
        <div class="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div class="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="<?php echo Router::url('home'); ?>#about-me" class="cursor-pointer">
                    About me
                </a>
                <a href="<?php echo Router::url('home'); ?>#skills" class="cursor-pointer">
                    Skills
                </a>
                <a href="<?php echo Router::url('home'); ?>#projects" class="cursor-pointer">
                    Projects
                </a>
            </div>
        </div>

        <!-- Social Media Icons -->
        <div class="flex flex-row gap-5">
            <!-- Email -->
            <a href="mailto:<?php echo htmlspecialchars($config['social']['email']); ?>" 
               class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
               aria-label="Email">
                <i class="fas fa-envelope text-2xl"></i>
            </a>
            
            <!-- LinkedIn -->
            <a href="<?php echo htmlspecialchars($config['social']['linkedin']); ?>" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
               aria-label="LinkedIn">
                <i class="fab fa-linkedin text-2xl"></i>
            </a>
            
            <!-- GitHub -->
            <a href="<?php echo htmlspecialchars($config['social']['github']); ?>" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
               aria-label="GitHub">
                <i class="fab fa-github text-2xl"></i>
            </a>
            
            <!-- GitLab -->
            <a href="<?php echo htmlspecialchars($config['social']['gitlab']); ?>" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
               aria-label="GitLab">
                <i class="fab fa-gitlab text-2xl"></i>
            </a>
        </div>
    </div>
</div>

