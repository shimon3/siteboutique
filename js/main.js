// Script minimal : le site fonctionne entièrement sans JavaScript.

// Année courante dans le pied de page
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Fine bordure sous l'en-tête une fois la page défilée
var header = document.querySelector('.site-header');
if (header) {
    var onScroll = function () {
        header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}
