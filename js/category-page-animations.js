/* Lightweight, opt-in scroll reveal for category cards.
   This script does not read or modify prices, stock, dimensions, or configurator links. */
(() => {
  'use strict';
  const initCategoryReveal = () => {
    const grids = document.querySelectorAll('[data-ne-category-grid]');
    if (!grids.length) return;

    const reducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = [];

    grids.forEach((grid) => {
      const items = grid.querySelectorAll('[data-ne-category-card]');
      if (!items.length) return;
      if (reducedMotion || !('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('is-visible'));
        return;
      }
      grid.classList.add('ne-category-grid--animated');
      items.forEach((item, index) => {
        item.style.transitionDelay = (Math.min(index % 4, 3) * 55) + 'ms';
        cards.push(item);
      });
    });

    if (!cards.length || reducedMotion || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.style.transitionDelay = '';
        currentObserver.unobserve(entry.target);
      });
    }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    cards.forEach((card) => observer.observe(card));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoryReveal, { once: true });
  } else {
    initCategoryReveal();
  }
})();
