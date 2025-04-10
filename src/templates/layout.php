<?php
/**
 * Base layout template for the PHP Showcase portfolio
 * 
 * This template provides the overall HTML structure for all pages
 */

// Access the global config
global $config;
global $uri;

// Current section info
$currentSection = $config['sections'][$uri];
$pageTitle = $currentSection['title'] . ' - ' . $config['site']['title'];
?>
<!DOCTYPE html>
<html lang="<?php echo $config['site']['language']; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($config['site']['description']); ?>">
    <meta name="author" content="<?php echo htmlspecialchars($config['site']['author']); ?>">
    
    <!-- Tailwind CSS - we're including the CDN for simplicity -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom configuration for Tailwind -->
    <script src="<?php echo BASE_URL; ?>/assets/js/animations.js"></script>
    <script src="<?php echo BASE_URL; ?>/assets/js/main.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        dark: '#030014',
                    },
                    animation: {
                        'slowspin': 'spin 8s linear infinite',
                    }
                }
            }
        }
    </script>
    
    <!-- Fonts -->
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/css/tailwind.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/css/styles.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/css/main.css">
    <!-- Adding Dancing Script for handwritten style text -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <!-- Three.js for star background animation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <!-- Custom CSS -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #030014;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        
        .Welcome-box {
            border-color: #7042f88b;
        }
        
        .Welcome-text {
            background: linear-gradient(to right, #b49bff, #f4f4f4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .button-primary {
            background: linear-gradient(45deg, #7042f861, #4e59ff59);
            box-shadow: 0 0 10px 2px rgba(112, 66, 248, 0.4);
            transition: all 0.3s ease;
        }
        
        .button-primary:hover {
            background: linear-gradient(45deg, #7042f8, #4e59ff);
        }
        
        .gradient-text {
            background: linear-gradient(to right, #b49bff, #904eff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-dark text-white">
    <!-- Navigation Bar (Always on top) -->
    <div class="relative z-30">
        <?php include_once BASE_PATH . '/src/components/navbar.php'; ?>
    </div>
    
    <!-- Main Content -->
    <div class="relative z-20">
        <?php include_once $template; ?>
    </div>
    
    <!-- Footer -->
    <div class="relative z-30">
        <?php include_once BASE_PATH . '/src/components/footer.php'; ?>
    </div>
    
    <!-- Stars Background -->
    <div id="starsCanvas" class="w-full h-auto fixed inset-0 z-10"></div>
    
    <!-- JavaScript for Stars Background -->
    <script>
        // Three.js star background animation
        document.addEventListener('DOMContentLoaded', function() {
            // Setup the scene
            const starsContainer = document.getElementById('starsCanvas');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 1;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            starsContainer.appendChild(renderer.domElement);
            
            // Create stars
            const starsGeometry = new THREE.BufferGeometry();
            const starsMaterial = new THREE.PointsMaterial({
                color: 0xFFFFFF,
                size: 0.002,
                transparent: true,
                opacity: 1
            });
            
            // Generate random points in sphere (similar to the Next.js version)
            const particleCount = 5000;
            const radius = 1.2;
            const positions = new Float32Array(particleCount * 3);
            
            for (let i = 0; i < particleCount * 3; i += 3) {
                // Random position within a sphere
                const theta = 2 * Math.PI * Math.random();
                const phi = Math.acos(2 * Math.random() - 1);
                const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution
                
                positions[i] = r * Math.sin(phi) * Math.cos(theta);
                positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i + 2] = r * Math.cos(phi);
            }
            
            starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            // Create the points mesh
            const stars = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(stars);
            
            // Add rotation to group
            const starsGroup = new THREE.Group();
            starsGroup.rotation.set(0, 0, Math.PI / 4);
            starsGroup.add(stars);
            scene.add(starsGroup);
            
            // Animation loop
            let lastTime = 0;
            function animate(currentTime) {
                requestAnimationFrame(animate);
                
                const delta = (currentTime - lastTime) / 1000;
                lastTime = currentTime;
                
                // Rotate stars (matching the Next.js implementation)
                stars.rotation.x -= delta / 10;
                stars.rotation.y -= delta / 15;
                
                renderer.render(scene, camera);
            }
            
            // Start animation
            animate(0);
            
            // Handle window resize
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
            
            window.addEventListener('resize', onWindowResize);
        });
    </script>
</body>
</html>

