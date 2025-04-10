<?php
/**
 * Router class for handling navigation between sections
 */
class Router {
    /**
     * Route to the appropriate template based on the URI
     * 
     * @param string $uri The URI segment to route to
     * @return void
     * @throws Exception If the template file doesn't exist
     */
    public function route($uri) {
        global $config;
        
        // Clean URI to prevent path traversal
        $uri = preg_replace('/[^a-zA-Z0-9-_]/', '', $uri);
        
        // Check if the section exists in config
        if (!isset($config['sections'][$uri])) {
            throw new Exception("Section not found: $uri");
        }
        
        $section = $config['sections'][$uri];
        $template = BASE_PATH . '/src/templates/' . $section['template'];
        
        if (!file_exists($template)) {
            throw new Exception("Template not found: {$section['template']}");
        }
        
        // Include the layout which will load the template
        require_once BASE_PATH . '/src/templates/layout.php';
    }
    
    /**
     * Generate a URL for a section
     * 
     * @param string $section The section name
     * @return string The full URL
     */
    public static function url($section = '') {
        if (empty($section) || $section === 'home') {
            return BASE_URL;
        }
        
        return BASE_URL . '/' . $section;
    }
}

