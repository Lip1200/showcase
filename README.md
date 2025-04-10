# PHP Showcase Portfolio

A PHP version of Filipe's portfolio website, converted from the original Next.js implementation. This project features a clean, responsive design with animated sections showcasing skills, projects, and professional experience.

## Inspiration
The backbone of this project was inspired by the excellent work of [Mif2006](https://github.com/Mif2006). I have adapted and extended it to fit my own needs and personal style.

## Features

- Responsive design with dark theme 
- Animated UI elements
- Dynamic sections for Skills, Projects, and CV
- Mobile-friendly navigation
- Starry animated background effect
- Downloadable CV

## Requirements

- PHP 7.4 or higher
- Apache web server with mod_rewrite enabled
- Standard web hosting environment or local development server

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd php_showcase
```

2. **Set up the web server**

Configure your web server to point to the project's root directory. For local development, you can use PHP's built-in server:

```bash
php -S localhost:8000
```

3. **Configuration**

Review and modify the configuration in `config/config.php` to match your environment settings.

## Project Structure

```
my_showcase/
├── assets/            # CSS, JS, and other frontend assets
│   ├── css/           # CSS files
│   └── js/            # JavaScript files (if added)
├── config/            # Configuration files
├── public/            # Publicly accessible files
│   ├── images/        # Image assets
│   └── cv.pdf         # Downloadable CV file
├── src/               # PHP source code
│   ├── components/    # Reusable components
│   ├── includes/      # Helper functions and data
│   └── templates/     # Page templates
├── .htaccess          # Apache configuration for routing
├── index.php          # Application entry point
└── README.md          # This file
```

## Local Development

### Using PHP's Built-in Server

```bash
php -S localhost:8000
```

### Using XAMPP/MAMP/WAMP

1. Install XAMPP, MAMP, or WAMP on your system
2. Clone or copy the project into the web server's document root directory:
   - XAMPP: `xampp/htdocs/php_showcase`
   - MAMP: `MAMP/htdocs/php_showcase`
   - WAMP: `wamp/www/php_showcase`
3. Start your local server
4. Access the project at http://localhost/php_showcase

### Apache Virtual Host Configuration

For a cleaner development experience, you can set up a virtual host:

1. Edit your Apache configuration (httpd.conf or httpd-vhosts.conf)
2. Add a virtual host configuration:

```apache
<VirtualHost *:80>
    ServerName php-showcase.local
    DocumentRoot "/path/to/php_showcase"
    <Directory "/path/to/php_showcase">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

3. Edit your hosts file to include: `127.0.0.1 php-showcase.local`
4. Restart the Apache server
5. Access the site at http://php-showcase.local

## Customization

### Updating Content

- **Personal Information**: Edit data in `src/includes/cv_data.php`
- **Skills**: Modify `src/includes/skill_data.php`
- **Projects**: Update `src/includes/project_data.php`

### Styling

- Global styles are defined in the layout template and animations.css
- Tailwind CSS is used for styling (via CDN in this implementation)
- Custom animations are in `assets/css/animations.css`

### Adding New Pages

1. Add your page template to `src/templates/`
2. Register the page in `config/config.php` under the 'sections' array

## Deployment

To deploy the project to a production server:

1. Upload all files to your web hosting environment
2. Ensure Apache mod_rewrite is enabled
3. Check that the .htaccess file is properly transferred (not hidden/ignored)
4. Set appropriate file permissions:
   - 755 for directories
   - 644 for files
   - 755 for executable files (if any)
5. Update configuration settings in `config/config.php` for production

## Credits

- Original design and implementation: Filipe Ramos
- Icons: Font Awesome
- CSS Framework: Tailwind CSS

## License

MIT License

