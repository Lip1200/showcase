<?php
/**
 * Home page template
 * 
 * This is the main template for the home page that includes all sections:
 * Hero, Skills, Projects, and CV
 */
?>

<!-- Hero Section -->
<div id="about-me">
    <?php include_once BASE_PATH . '/src/components/hero.php'; ?>
</div>

<!-- Skills Section -->
<div id="skills">
    <?php include_once BASE_PATH . '/src/components/skills.php'; ?>
</div>

<!-- Projects Section -->
<div id="projects">
    <?php include_once BASE_PATH . '/src/components/projects.php'; ?>
</div>

<!-- CV Section -->
<div id="cv">
    <?php include_once BASE_PATH . '/src/components/cv.php'; ?>
</div>

<!-- Deployment Test Section -->
<div id="deployment-test">
    <?php include_once BASE_PATH . '/src/components/deployment_test.php'; ?>
</div>

<!-- Animation Script -->
<script src="<?php echo BASE_URL; ?>/assets/js/animation.js"></script>

