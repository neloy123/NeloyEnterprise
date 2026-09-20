// Neloy Enterprise — Material price database
// Confirmed prices supplied by owner. Values are buying/list inputs unless changed here.

const MATERIAL_PRICE_DB = {
  glass_3_5: {
    name: "3.5mm Glass",
    unit: "sqft",
    buyPrice: 80,
    confirmed: true
  },
  glass_5: {
    name: "5mm Glass",
    unit: "sqft",
    buyPrice: 115,
    confirmed: true
  },
  reflective_blue_5_5: {
    name: "Reflective Blue 5.5mm",
    unit: "sqft",
    buyPrice: 180,
    confirmed: true
  },

  // Add actual current buying prices when supplied:
  mirror: {
    name: "Mirror",
    unit: "sqft",
    buyPrice: null,
    confirmed: false
  },
  melamine_board: {
    name: "Melamine Board",
    unit: "sqft",
    buyPrice: null,
    confirmed: false
  },
  hardboard: {
    name: "Hardboard",
    unit: "sqft",
    buyPrice: null,
    confirmed: false
  },
  chipboard: {
    name: "Chipboard",
    unit: "sqft",
    buyPrice: null,
    confirmed: false
  }
};

function materialPrice(materialId) {
  return MATERIAL_PRICE_DB?.[materialId]?.buyPrice ?? null;
}
