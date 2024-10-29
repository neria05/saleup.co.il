document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Add hover effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mousemove', (e) => {
        const rect = ctaButton.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctaButton.style.setProperty('--x', x + 'px');
        ctaButton.style.setProperty('--y', y + 'px');
    });

    // Animate social icons on hover
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(360deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
});