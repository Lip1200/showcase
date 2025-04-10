<?php
/**
 * Hero component
 * 
 * This component displays the hero section with animated content
 */
global $config;
?>
<div class="relative flex flex-col h-full w-full">
    <div class="animate-content flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
        <div class="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <!-- Welcome Box with Icon -->
            <div class="animate-item animate-slide-top Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center">
                <i class="fas fa-sparkles text-[#b49bff] mr-[10px] h-5 w-5"></i>
                <h1 class="Welcome-text text-[13px]">IT Specialist &nbsp;</h1>
            </div>

            <!-- Main Heading -->
            <div class="animate-item animate-slide-left animate-delay-500 flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto">
                <span>
                    Shaping tomorrow&apos;s
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        tech
                    </span>
                    today
                </span>
            </div>

            <!-- Description Text -->
            <p class="animate-item animate-slide-left animate-delay-800 text-lg text-gray-400 my-5 max-w-[600px]">
                Currently a final-year IT student, fast learner, and working on my IBM
                AI Engineer badge. Check out my evolving projects and growing
                expertise.
            </p>

            <!-- Buttons -->
            <div class="flex gap-4">
                <!-- Learn More Button -->
                <div class="animate-item animate-slide-left animate-delay-1000 py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                    <a href="#cv" class="text-white flex items-center justify-center">
                        Learn More
                    </a>
                </div>

                <!-- CV Download Button -->
                <div class="animate-item animate-slide-left animate-delay-1200 py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                    <a href="/public/cv.pdf" download class="text-white flex items-center gap-2">
                        <i class="fas fa-download w-5 h-5"></i>
                        My CV
                    </a>
                </div>
            </div>
        </div>

        <!-- QR Code -->
        <div class="animate-item animate-slide-right animate-delay-800 w-full h-full flex justify-center items-center">
            <div class="relative w-[50%] max-w-[300px] h-[300px]">
                <img src="/public/QrCode.svg" alt="work icons" class="object-contain w-full h-full">
            </div>
        </div>
    </div>
</div>

<!-- Add placeholder divs for the missing components -->
<div class="mt-10 text-center text-gray-400 hidden">
    <p>Skills component will be loaded here</p>
    <p>Projects component will be loaded here</p>
    <p>CV component will be loaded here</p>
</div>

