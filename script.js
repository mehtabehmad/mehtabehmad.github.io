// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const bar = document.querySelector('.scroll-progress');
    if (bar) {
        bar.style.width = `${scrolled}%`;
    }
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-container').forEach((section) => {
    observer.observe(section);
});

document.querySelectorAll('.reveal-item').forEach((item) => {
    observer.observe(item);
});

// Smooth Scroll
function smoothScroll(target) {
    if (!target || typeof target !== 'string') {
        return;
    }

    const element = document.querySelector(target);
    if (!element) {
        return;
    }

    const yOffset = 15;
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Anchor Link Handling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
            return;
        }
        e.preventDefault();
        smoothScroll(href);
    });
});

// Scroll-down button
document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => {
        smoothScroll(button.dataset.target);
    });
});

// Project Card Expansion
document.querySelectorAll('.read-more').forEach((btn) => {
    btn.addEventListener('click', function () {
        const card = this.closest('.project-card');
        if (!card) {
            return;
        }

        card.classList.toggle('expanded');
        this.textContent = card.classList.contains('expanded') ? 'Show Less' : 'Read More';

        if (!card.classList.contains('expanded')) {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
