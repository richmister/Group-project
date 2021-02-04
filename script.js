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

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(budgetForm);
  let amount = formData.get("amount");
  console.log(amount);
  balance.textContent = `${amount}`;
  budgetForm.reset();
  budgetForm.style.display = "none";
  expenseForm.style.display = "flex";
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(expenseForm);
  let amount = snapshot.get("expenseamount");
  let type = snapshot.get("expensetype");
  let total = balance.innerHTML;
  console.log(type, amount);
  if (type === "entertainment") {
    entertainment.textContent = `$${amount}`;
    balance.textContent = total - amount;
    expenseForm.reset();
  } else if (type === "food") {
    food.textContent = `$${amount}`;
    balance.textContent = total - amount;
    expenseForm.reset();
  } else if (type === "clothing") {
    clothing.textContent = `$${amount}`;
    balance.textContent = total - amount;
    expenseForm.reset();
  } else if (type === "bills") {
    bills.textContent = `$${amount}`;
    balance.textContent = total - amount;
    expenseForm.reset();
  }
});
