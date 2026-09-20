// Neloy Enterprise — Accessory & Launch Pricing
// Launch phase: no profit/markup added.
const ACCESSORY_PRICE_DB = {
  wheel_pair: { name: "Wheel (pair)", unit: "pair", price: 100 },
  lock: { name: "Lock", unit: "pcs", price: 200 },
  rubber: { name: "Rubber", unit: "ft", price: 50 },
  fitting: { name: "Fitting", unit: "ft", price: 30 },
};

const PRICING_SETTINGS = {
  wastagePercent: 2,
  labourPerSqFt: 20,
  profitPercent: 0,
};

function accessoryCost(id, quantity) {
  const item = ACCESSORY_PRICE_DB[id];
  if (!item) return 0;
  return item.price * quantity;
}

function applyWastage(cost) {
  return cost * (1 + PRICING_SETTINGS.wastagePercent / 100);
}

function calculateLaunchingPrice({ aluminiumCost, glassCost, accessoryCostTotal = 0, areaSqFt }) {
  const materialAndAccessory = aluminiumCost + glassCost + accessoryCostTotal;
  const wastage = materialAndAccessory * (PRICING_SETTINGS.wastagePercent / 100);
  const labour = areaSqFt * PRICING_SETTINGS.labourPerSqFt;
  const totalCost = materialAndAccessory + wastage + labour;
  const profit = totalCost * (PRICING_SETTINGS.profitPercent / 100);
  return {
    materialAndAccessory,
    wastage,
    labour,
    profit,
    finalPrice: totalCost + profit,
  };
}
