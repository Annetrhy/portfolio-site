console.log("Smiski Firgurine Blind Box Pricing");
// Product information
let productName = "Smiski Firgurine Blind Box";

// Pricing inputs
let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15;     // 15% discount
let salesTaxRate = 0.07;     // 7% tax
let fixedMonthlyCosts = 2000; // Rent, utilities, etc.

// Price after discount (before tax)
let discountedPrice = basePrice * (1 - discountRate);

// Final price customer pays (after tax)
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);

// Profit made per unit sold
let profitPerUnit = finalPriceWithTax - costPerUnit;

// Break even units (rounded UP to whole unit)
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);

// Is each unit profitable?
let isProfitablePerUnit = profitPerUnit > 0;

console.log("=== Product Pricing Assistant ===");

console.log("Product:", productName);

console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));

console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));

console.log("Break-Even Units (per month):", breakEvenUnits);

console.log("Profitable Per Unit?:", isProfitablePerUnit);
