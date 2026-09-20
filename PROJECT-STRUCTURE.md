# Neloy Enterprise — Project Structure

## Website architecture

The website is being built as a custom manufacturing platform for Neloy Enterprise.

### Main user flow
Home
→ Products / Shop
→ Product Detail
→ Configure
→ Live Price
→ Design Summary
→ WhatsApp Quote

### Product configurator — 8 products

1. Glass & Aluminium Sliding Window
2. Glass Aluminium Door
3. Glass Aluminium Showcase
4. Melamine Board Bookshelf
5. Custom Home Decor
6. Glass Partition
7. Custom Mirror
8. Shop Display / Storage Unit

### Pricing engine

Product Configurator
→ Component calculation
→ Material quantity
→ Wastage
→ Accessories / hardware
→ Labour
→ Other cost
→ Profit
→ Final estimated selling price

### Central data layers

- Material database
  - Glass 3.5 mm
  - Glass 5 mm
  - Reflective glass
  - Mirror
  - Melamine board
  - Hardboard
  - Chipboard
- Aluminium profile database
  - Outer Top
  - Outer Bottom
  - Outer Side
  - Inter Top
  - Inter Bottom
  - Inter Lock
  - Shutter Lock
- Accessories database
  - Wheel
  - Lock
  - Rubber
  - Fitting

### Future admin layer

Admin Dashboard
→ Edit material prices
→ Edit aluminium profile prices
→ Edit accessory prices
→ Set labour
→ Set wastage
→ Set profit
→ Manage products
→ View customer quotations
→ Save orders

### Current implementation

- `index.html` is currently the main application file.
- Existing Home, About and Contact sections are preserved as the foundation.
- Shop, Product Detail and Configure are being upgraded into the manufacturing configurator system.
- The current visual placeholders will later be replaceable with real Neloy Enterprise product/project photos.

## Manufacturing calculation example

For the two-panel 4 ft × 4 ft sliding window:

- Window area: 16 sq ft
- Glass requirement reference: 12.8 sq ft
- Aluminium profile set: 7 profile types
- Total profile length reference: 32 running ft
- Accessories: wheel, lock, rubber and fitting

The calculator will use formulas rather than hard-coded final prices.

## Repository

Default branch: `main`

Main entry point: `index.html`

## Planned file structure

```
NeloyEnterprise/
├── index.html
├── README.md
├── PROJECT-STRUCTURE.md
├── css/
│   └── styles.css              # future extraction from index.html
├── js/
│   ├── app.js                  # future application logic
│   ├── products.js             # product definitions
│   ├── configurator.js         # configurator UI
│   └── pricing-engine.js       # manufacturing price calculations
├── data/
│   ├── materials.js            # material prices
│   ├── aluminium.js            # aluminium profile prices
│   └── accessories.js          # hardware/accessory prices
├── assets/
│   ├── images/
│   └── icons/
└── docs/
    └── manufacturing-rules.md
```

This structure is the target architecture. The migration from the current single-file prototype will be done incrementally so the working website is not broken.
