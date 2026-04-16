// Smooth in-page navigation
for (const link of document.querySelectorAll('a[href^="#"]')) {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const section = document.querySelector(targetId);
        if (!section) return;

        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// Keep footer year current
const yearNode = document.querySelector('#current-year');
if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}
