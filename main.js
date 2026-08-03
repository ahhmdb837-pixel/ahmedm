// SPA Navigation Function
function switchPage(pageId, event) {
    if(event) {
        event.preventDefault();
    }

    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(pageId);
    if(targetSection) {
        targetSection.classList.add('active');
    }

    // Update active navbar link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Close Mobile Menu if active
    const navMenu = document.getElementById('nav-links');
    if(navMenu) {
        navMenu.classList.remove('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Event Handler
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if(mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});