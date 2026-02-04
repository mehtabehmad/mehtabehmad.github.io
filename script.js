// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = `${scrolled}%`;
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-container').forEach((section) => {
    observer.observe(section);
});

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

// Anchor Link Handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Project Card Expansion
document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.project-card');
        if (card.classList.contains('expanded')) {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
