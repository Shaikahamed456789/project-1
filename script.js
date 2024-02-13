// Get the elements from the document
const toggleSwitch = document.getElementById("toggle-switch");
const priceValues = document.querySelectorAll(".price-value");
const priceUnits = document.querySelectorAll(".price-unit");
const currencySelect = document.getElementById("currency-select");
const currencySymbols = document.querySelectorAll(".currency-symbol");

// Define the monthly and yearly prices for each plan
const monthlyPrices = [99, 299, 999];
const yearlyPrices = [999, 2999, 9999];

// Define the currency symbols and exchange rates
const currencies = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.014 },
  EUR: { symbol: "€", rate: 0.012 },
  GBP: { symbol: "£", rate: 0.010 },
  JPY: { symbol: "¥", rate: 1.54 },
};

// Define a function