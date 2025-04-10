/**
 * Animation utilities for the PHP showcase portfolio
 * 
 * This script handles scroll-triggered animations and other animation effects
 * to match the original Next.js implementation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create the Intersection Observer
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the visible class to trigger the animation
        entry.target.classList.add('animate-visible');
        
        // Once the animation is triggered, no need to observe anymore
        animationObserver.unobserve(entry.target);
      }
    });
  }, {
    // Options similar to the original Next.js implementation
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    animationObserver.observe(element);
  });
  
  // Apply random float animations to skill icons
  document.querySelectorAll('.animate-float').forEach((element, index) => {
    // Add random delay to each floating element
    const randomDelay = Math.random() * 2;
    const randomDuration = 3 + Math.random();
    
    element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
  });
  
  // Apply smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add progressive animations for sequence elements
  document.querySelectorAll('[data-animation-sequence]').forEach(container => {
    const children = container.querySelectorAll('[data-sequence-item]');
    
    children.forEach((child, index) => {
      child.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
      
      // Add to animation observer
      animationObserver.observe(child);
    });
  });
  
  // Hero section typing effect
  const heroTextElement = document.querySelector('.hero-text-typing');
  if (heroTextElement) {
    const text = heroTextElement.textContent;
    heroTextElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroTextElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing animation with a slight delay
    setTimeout(typeWriter, 1000);
  }
});

/**
 * Animation utilities for the PHP showcase portfolio
 * This file mimics the functionality of Framer Motion by providing
 * similar animation capabilities using vanilla JavaScript and CSS.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Observer for scroll-triggered animations
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // Get animation type from element
        const animationType = el.classList.contains('animate-slide-left') ? 'slide-left' :
                              el.classList.contains('animate-slide-right') ? 'slide-right' :
                              el.classList.contains('animate-slide-top') ? 'slide-top' :
                              el.classList.contains('animate-slide-bottom') ? 'slide-bottom' : null;
        
        if (animationType) {
          // Add visible class to trigger animation
          el.classList.add('animate-visible');
          
          // Remove from observer after animation is triggered
          animationObserver.unobserve(el);
        }
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Register all animate-on-scroll elements with the observer
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animationObserver.observe(el);
  });

  // Float animation for skill logos
  const floatElements = document.querySelectorAll('.animate-float');
  floatElements.forEach(el => {
    // Apply random subtle float animation to each element
    const randomDelay = Math.random() * 2;
    const randomDuration = 3 + Math.random() * 2;
    
    el.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
  });
});

// Define the float animation in CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  /* Animation base classes */
  .animate-item {
    opacity: 0;
    transition: all 0.5s ease-out;
  }

  .animate-visible {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }

  /* Slide in animations */
  .animate-slide-left {
    transform: translateX(-100px);
  }

  .animate-slide-right {
    transform: translateX(100px);
  }

  .animate-slide-top {
    transform: translateY(-100px);
  }

  .animate-slide-bottom {
    transform: translateY(100px);
  }

  /* Different animation delays */
  .animate-delay-100 { transition-delay: 0.1s; }
  .animate-delay-200 { transition-delay: 0.2s; }
  .animate-delay-300 { transition-delay: 0.3s; }
  .animate-delay-400 { transition-delay: 0.4s; }
  .animate-delay-500 { transition-delay: 0.5s; }
  .animate-delay-600 { transition-delay: 0.6s; }
  .animate-delay-700 { transition-delay: 0.7s; }
  .animate-delay-800 { transition-delay: 0.8s; }
  .animate-delay-900 { transition-delay: 0.9s; }
  .animate-delay-1000 { transition-delay: 1s; }

  /* Float animation for skill logos */
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(styleSheet);

