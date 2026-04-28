// filepath: portfolio.js

document.addEventListener('DOMContentLoaded', () => {
    
    // =====================
    // Navigation Active
    // =====================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Highlight navigation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => navObserver.observe(section));

    // =====================
    // Smooth Scroll
    // =====================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // =====================
    // Project Cards Animation
    // =====================
    const projectItems = document.querySelectorAll('.project-item');

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        projectObserver.observe(item);
    });

    // =====================
    // Skills Animation
    // =====================
    const skillBoxes = document.querySelectorAll('.skill-box');
    const toolItems = document.querySelectorAll('.tool-item');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    skillBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'all 0.4s ease';
        skillObserver.observe(box);
    });

    toolItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, index * 50);
    });

    // =====================
    // Contact Form
    // =====================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Log form data
            console.log('Formulaire soumis:', { name, email, message });

            // Success message
            alert(`Merci ${name} ! Votre message a été envoyé avec succès.`);
            
            contactForm.reset();
        });
    }

    // =====================
    // Navbar Background on Scroll
    // =====================
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
    });

    // =====================
    // About Cards Animation
    // =====================
    const aboutCards = document.querySelectorAll('.about-card');

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    aboutCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        aboutObserver.observe(card);
    });

    // =====================
    // Header Animation on Load
    // =====================
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.style.opacity = '0';
        headerContent.style.transform = 'translateY(30px)';
        headerContent.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            headerContent.style.opacity = '1';
            headerContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // =====================
    // Parallax Effect (subtle)
    // =====================
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const header = document.querySelector('.header');
                if (header) {
                    header.style.backgroundPositionY = scrolled * 0.3 + 'px';
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    console.log('Portfolio loaded successfully!');
});