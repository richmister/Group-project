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
  totalSpent += amount;
  moneySpent.textContent = `$${totalSpent}`;
  let total = balance.innerHTML;

  if (type === "entertainment") {
    if (checkFunds(amount)) {
      entertainment.textContent = `$${amount}`;
      balance.textContent = total - amount;
      expenseForm.reset();
    }
  } else if (type === "food") {
    if (checkFunds(amount)) {
      food.textContent = `$${amount}`;
      balance.textContent = total - amount;
      expenseForm.reset();
    }
  } else if (type === "clothing") {
    if (checkFunds(amount)) {
      clothing.textContent = `$${amount}`;
      balance.textContent = total - amount;
      expenseForm.reset();
    }
  } else if (type === "bills") {
    if (checkFunds(amount)) {
      bills.textContent = `$${amount}`;
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
