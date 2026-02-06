// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const bar = document.querySelector('.scroll-progress');

    if (bar) {
        bar.style.width = `${scrolled}%`;
    }
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

    const yOffset = 12;
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
            return;
        }

        e.preventDefault();
        smoothScroll(href);

        const nav = document.querySelector('.site-nav');
        const toggle = document.querySelector('.nav-toggle');
        if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Scroll indicator button
document.querySelectorAll('[data-target]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        smoothScroll(trigger.dataset.target);
    });
});

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-up').forEach((element) => {
    revealObserver.observe(element);
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const open = siteNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
    });
}
