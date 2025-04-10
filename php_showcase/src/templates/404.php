<?php
/**
 * 404 Not Found error page
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #030014;
        }
        .gradient-text {
            background: linear-gradient(to right, #b49bff, #904eff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-[#030014] text-white min-h-screen flex flex-col items-center justify-center">
    <div class="container mx-auto text-center py-20 px-4">
        <h1 class="text-6xl font-bold mb-6">
            <span class="gradient-text">404</span>
        </h1>
        <p class="text-2xl mb-8">Page Not Found</p>
        <p class="mb-8 text-gray-400 max-w-lg mx-auto">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <a href="/" class="py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
            Return Home
        </a>
    </div>
    
    <div id="starsCanvas" class="fixed top-0 left-0 w-full h-full z-0"></div>
    
    <!-- JavaScript for Stars Background -->
    <script>
        // Simplified star background animation
        document.addEventListener('DOMContentLoaded', function() {
            const canvas = document.getElementById('starsCanvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Create stars
            const stars = [];
            const starCount = Math.min(window.innerWidth, window.innerHeight) * 0.05;
            
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    opacity: Math.random() * 0.5 + 0.5
                });
            }
            
            // Draw stars
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                stars.forEach(star => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    star.opacity = Math.random() * 0.5 + 0.5; // Twinkle effect
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    ctx.fill();
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
        });
    </script>
</body>
</html>

