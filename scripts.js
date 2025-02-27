// scripts.js
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight * 0.5;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.add('active');
        } else {
            document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.remove('active');
        }
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Header hide/show on scroll
let lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
        document.querySelector('header').classList.add('hidden');
    } else {
        document.querySelector('header').classList.remove('hidden');
    }
    lastScrollPosition = currentScrollPosition;
});

// Initialize AOS animations
AOS.init({
    duration: 1000,
    easing: 'ease-out-back',
    once: true
});

// Slideshow functionality
document.addEventListener("DOMContentLoaded", function () {
    const slideshows = {
        '.male-slideshow': ['smart1.jpg', 'smart2.jpg', 'smart3.jpg', 'smart4.jpg', 'smart5.jpg'],
        '.kids-slideshow': ['smart6.jpg', 'smart7.jpg', 'smart8.jpg', 'smart9.jpg', 'smart10.jpg'],
        '.women-slideshow': ['smart5.jpg', 'smart4.jpg', 'smart1.jpg', 'smart2.jpg', 'smart3.jpg'],
        '.general-slideshow': ['smart10.jpg', 'smart9.jpg', 'smart6.jpg', 'smart7.jpg', 'smart8.jpg']
    };

    Object.entries(slideshows).forEach(([selector, images]) => {
        const container = document.querySelector(selector);
        let currentIndex = 0;

        if (!container) return; // Ensure the container exists

        // Clear any existing content
        container.innerHTML = '';

        // Create slides dynamically
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'gallery-slide';
            slide.style.backgroundImage = `url(images/${image})`;
            if (index === 0) slide.classList.add('active'); // First image visible
            container.appendChild(slide);
        });

        // Start the slideshow
        const slides = container.querySelectorAll('.gallery-slide');

        setInterval(() => {
            slides[currentIndex].classList.remove('active'); // Hide current
            currentIndex = (currentIndex + 1) % images.length;
            slides[currentIndex].classList.add('active'); // Show next
        }, 3000); // 3 seconds per image
    });
});

