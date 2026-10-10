# Category page redesign — safe integration guide

## Status
This branch adds isolated, opt-in category grid styles and scroll-reveal JavaScript. It intentionally does not replace `index.html`, product data, configurators, stock values, or pricing functions.

## Files
- `css/category-page-redesign.css` — responsive 4/3/2-column card grid and visual styles.
- `js/category-page-animations.js` — small IntersectionObserver reveal effect with reduced-motion fallback.

## Required integration after inspecting the live category markup
1. Back up `index.html` and verify the latest `main` version before editing.
2. Add this stylesheet in the document head:
   `<link rel="stylesheet" href="css/category-page-redesign.css">`
3. Add the script before `</body>`:
   `<script src="js/category-page-animations.js" defer></script>`
4. Apply `ne-category-section` to the category section wrapper and `ne-category-grid` plus `data-ne-category-grid` to the grid wrapper.
5. Apply `ne-category-card` and `data-ne-category-card` to each existing category card. Add `ne-category-card__media`, `ne-category-card__body`, `ne-category-card__title`, `ne-category-card__description`, and `ne-category-card__action` to the corresponding existing elements.
6. Keep every existing card's href, category ID, data attributes, button handlers, configurator routing, and price logic unchanged. Do not add prices to cards unless they already come from the existing pricing system.
7. Replace image sources only after selecting and committing the approved product image files; use descriptive alt text, `loading="lazy"`, and explicit width/height or aspect ratio.

## Image plan
Use distinct, realistic product images for:
- Glass & aluminium sliding window
- Glass & aluminium door
- Glass/aluminium showcase
- Melamine-board bookshelf
- Glass partition
- Mirror
- Shop display/storage
- PVC ceiling (only if this category already exists in the current page)

The repository already contains product assets in `assets/images/products/`; the new images requested still need to be sourced/approved and added as files. Avoid changing the current image paths until the live markup is inspected.

## Acceptance checks
- Every original category link opens the same destination as before.
- Existing configurator entry points still open and calculations match before/after.
- No changes to `data/materials.js`, `data/aluminium.js`, or `data/accessories.js`.
- Mobile 320–390px: two readable columns, no horizontal overflow.
- Desktop: four columns on wide screens, three on medium screens.
- Scroll reveal works once per card; reduced-motion users see all cards without animation.
- Test browser console and image loading before merging into `main`.
