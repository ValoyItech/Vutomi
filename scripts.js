// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            once: true
        });
    } else {
        console.error('AOS library not properly loaded');
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Header hide/show on scroll
    let lastScrollPosition = 0;
    const header = document.querySelector('header');
    if (header) {
        document.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > lastScrollPosition) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollPosition = currentScrollPosition;
        });
    }

    // Slideshow functionality
    const slideshows = {
        '.male-slideshow': ['smart1.jpg', 'smart2.jpg', 'smart3.jpg', 'smart4.jpg', 'smart5.jpg'],
        '.kids-slideshow': ['smart6.jpg', 'smart7.jpg', 'smart8.jpg', 'smart9.jpg', 'smart10.jpg'],
        '.women-slideshow': ['smart5.jpg', 'smart4.jpg', 'smart1.jpg', 'smart2.jpg', 'smart3.jpg'],
        '.general-slideshow': ['smart10.jpg', 'smart9.jpg', 'smart6.jpg', 'smart7.jpg', 'smart8.jpg']
    };

    Object.entries(slideshows).forEach(([selector, images]) => {
        const container = document.querySelector(selector);
        if (container) {
            let currentIndex = 0;
            container.innerHTML = '';
            images.forEach((image, index) => {
                const slide = document.createElement('div');
                slide.className = 'gallery-slide';
                slide.style.backgroundImage = `url(images/${image})`;
                if (index === 0) slide.classList.add('active');
                container.appendChild(slide);
            });
            const slides = container.querySelectorAll('.gallery-slide');
            setInterval(() => {
                slides[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                slides[currentIndex].classList.add('active');
            }, 3000);
        }
    });
});
