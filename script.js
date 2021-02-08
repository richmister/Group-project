"use strict";

let budgetTotal = document.querySelector(".budget total");
let budgetForm = document.querySelector(".budget-form");
let balance = document.querySelector(".balance");
let expenseForm = document.querySelector(".expense-form");
let entertainment = document.querySelector(".entertainment");
let food = document.querySelector(".food");
let clothing = document.querySelector(".clothing");
let bills = document.querySelector(".bills");
let noFunds = document.querySelector(".no-funds");
let overLoad = document.querySelector(".overload");
let escape = document.querySelector(".escape");
let moneySpent = document.querySelector(".money-spent");
let totalSpent = 0;
let entTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(budgetForm);
  let amount = formData.get("amount");

  balance.textContent = `${amount}`;
  budgetForm.reset();
  budgetForm.style.display = "none";
  expenseForm.style.display = "flex";
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(expenseForm);
  let amount = parseInt(snapshot.get("expenseamount"));
  let type = snapshot.get("expensetype");
  if (checkFunds(amount)) {
    totalSpent += amount;
    moneySpent.textContent = `$${totalSpent}`;
  }
  let total = balance.innerHTML;

  if (type === "entertainment") {
    if (checkFunds(amount)) {
      entTotal += amount;
      entertainment.textContent = `$${entTotal}`;
      balance.textContent = total - amount;
      expenseForm.reset();
    }
  } else if (type === "food") {
    if (checkFunds(amount)) {
      foodTotal += amount;
      food.textContent = `$${foodTotal}`;
      balance.textContent = total - amount;
      expenseForm.reset();
    }
  } else if (type === "clothing") {
    if (checkFunds(amount)) {
      clothingTotal += amount;
      clothing.textContent = `$${clothingTotal}`;
      balance.textContent = total - amount;
      expenseForm.reset();
    }
  } else if (type === "bills") {
    if (checkFunds(amount)) {
      billsTotal += amount;

      bills.textContent = `$${billsTotal}`;
      balance.textContent = total - amount;
    }
  }
});

const checkFunds = (amount) => {
  let total = balance.innerHTML;
  if (total - amount < 0) {
    overLoad.style.display = "flex";
    return false;
  }
  return true;
};
escape.addEventListener("click", () => {
  overLoad.style.display = "none";
});
