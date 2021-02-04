"use strict";

let budgetTotal = document.querySelector(".budget total");
let entetainment = document.querySelector(".entertainment");
let budgetForm = document.querySelector(".budget-form");
let balance = document.querySelector(".balance");
let expenseForm = document.querySelector(".expense form");

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(budgetForm);
  let amount = formData.get("amount");
  console.log(amount);
  balance.textContent = `${amount}`;
  budgetForm.reset();
});
