document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });

    // Initialize Typed.js for the hero section
    const typed = new Typed('#typed', {
        strings: [
            'Android Engineer',
            'KMP Specialist',
            'Mobile Architect',
            'Squad Lead'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle between bars and times icon
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }

                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handling (Prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! This is a demo. In a real scenario, this would send an email.');
            contactForm.reset();
        });
    }
});
