// دالة التنقل بين الصفحات
function switchPage(pageId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // إخفاء كل الصفحات
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // إظهار الصفحة المطلوبة
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // تحديث الزر النشط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // إغلاق قائمة الموبايل عند الضغط على أي عنصر
    const navMenu = document.getElementById('nav-links');
    if (navMenu) {
        navMenu.classList.remove('active');
    }

    // الصعود لأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// دالة تشغيل الهامبرجر من الموبايل
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }
});