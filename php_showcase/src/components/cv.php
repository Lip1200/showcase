<?php
/**
 * CV Component
 * 
 * Matches the original Next.js CVContent implementation
 */
?>

<div class="relative flex flex-col h-full w-full" id="cv">
    <div class="flex flex-col items-center justify-center px-10 mt-40 w-full z-[20]">
        <div id="cv" class="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <!-- CV Title -->
            <div class="animate-item animate-slide-top animate-on-scroll py-[8px] px-[7px] opacity-[0.9] w-full">
                <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Curriculum Vitae
                </h1>
            </div>

            <!-- Introduction -->
            <p class="animate-item animate-slide-left animate-on-scroll animate-delay-500 text-xl mb-4 text-gray-400 w-full">
                Below is a summary of my professional journey, highlighting my diverse experiences and skills.
            </p>

            <!-- CV Content -->
            <div class="animate-item animate-slide-left animate-on-scroll animate-delay-800 w-full p-8 bg-gray-800 bg-opacity-10 rounded-lg shadow-lg">
                <!-- Professional Experience -->
                <section class="mb-6 w-full">
                    <h2 class="text-2xl font-semibold mb-2 text-white">
                        Professional Experience
                    </h2>
                    <p class="text-lg text-gray-300 w-full">
                        Having worked for over a decade as a specialized educator, I have
                        honed critical interpersonal and management skills. My career
                        transition into IT allowed me to find the intellectual stimulation
                        I was seeking, and I am currently advancing my expertise as an AI
                        Engineer.
                    </p>
                    <ul class="list-disc pl-5 text-lg mt-4 text-gray-300 w-full">
                        <li>AI Engineer in training, IBM Badge Program (Current)</li>
                        <li>IT Specialist, UNIGE (2022 - 2025)</li>
                        <li>Specialized Educator, various institutions (2010 - 2022)</li>
                    </ul>
                </section>

                <!-- Education -->
                <section class="mb-6 w-full">
                    <h2 class="text-2xl font-semibold mb-2 text-white">
                        Education
                    </h2>
                    <p class="text-lg text-gray-300 w-full">
                        Bachelor's Degree in Information Systems and Service Science
                        (Expected 2025)
                    </p>
                    <p class="text-lg text-gray-300 w-full">
                        Bachelor of Arts in Social Work, specialization in Special
                        Education (2017)
                    </p>
                </section>

                <!-- Skills -->
                <section class="mb-6 w-full">
                    <h2 class="text-2xl font-semibold mb-2 text-white">Skills</h2>
                    <p class="text-lg text-gray-300 w-full">
                        <strong>Technical Skills:</strong> C, C++, Java, Scala, Python,
                        Flask, TailwindCSS, Next.js, ChromaDB, Scikit-learn, Docker,
                        SQLAlchemy, ...
                    </p>
                    <p class="text-lg text-gray-300 mt-2 w-full">
                        <strong>Interpersonal Skills:</strong> I am a facilitator of team
                        cohesion, conflict resolution, active listening, adaptability,
                        mentorship.
                    </p>
                </section>

                <!-- About Me -->
                <section class="mb-6 w-full">
                    <h2 class="text-2xl font-semibold mb-2 text-white">About Me</h2>
                    <p class="text-lg text-gray-300 w-full">
                        My transition from specialized education to IT has been a
                        transformative journey. In addition to my work, I am a passionate
                        boxer and have recently become a father, both of which contribute
                        to my determination and discipline.
                    </p>
                </section>

                <!-- CV Download Button -->
                <div class="animate-item animate-slide-left animate-on-scroll animate-delay-1000 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto">
                    <a href="/public/cv.pdf" download class="text-white flex items-center justify-center gap-2">
                        <i class="fas fa-download w-5 h-5"></i>
                        My CV
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

