/**
 * Animation utilities for the PHP Showcase portfolio
 * 
 * This file contains JavaScript functions to handle animations
 * that replace the Framer Motion animations from the original Next.js version
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Add scroll-based animation triggers
    window.addEventListener('scroll', handleScrollAnimations);
});

/**
 * Initialize animations on page load
 */
function initAnimations() {
    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-item');
    
    // Add observer for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add initial animation to hero section
    triggerHeroAnimation();
}

/**
 * Trigger hero section animations
 */
function triggerHeroAnimation() {
    const heroContent = document.querySelector('.animate-content');
    if (!heroContent) return;
    
    // Stagger the animations of child elements
    const items = heroContent.querySelectorAll('.animate-item');
    items.forEach((item, index) => {
        // Already has delay classes applied in HTML
        // This just ensures they all start hidden and then animate in
        item.style.opacity = '0';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.classList.add('animate-visible');
        }, 100);
    });
}

/**
 * Handle scroll-based animations
 */
function handleScrollAnimations() {
    // Get all animation elements that need to be triggered by scroll
    const scrollAnimElements = document.querySelectorAll('.animate-on-scroll:not(.animate-visible)');
    
    scrollAnimElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // If element is in viewport
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('animate-visible');
        }
    });
}

/**
 * Utility function to add animation to an element with parameters
 * 
 * @param {HTMLElement} element - The element to animate
 * @param {string} animationType - Type of animation (slide-left, slide-right, slide-top, fade)
 * @param {number} delay - Delay in milliseconds before animation starts
 */
function animateElement(element, animationType, delay = 0) {
    if (!element) return;
    
    element.classList.add('animate-item');
    element.classList.add(`animate-${animationType}`);
    
    if (delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
    }
    
    // Force reflow
    void element.offsetWidth;
    
    // Trigger animation
    element.classList.add('animate-visible');
}

