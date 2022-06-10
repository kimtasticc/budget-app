// Initial values
let monthlyIncome = 0; // number
let expenses = []; // an array of objects
let expenseTotal = 0; // number
let balance = 0; // number

// Get references to elements
let monthlyBudget = document.getElementById("monthlyBudget");
let monthlyBudgetForm = document.getElementById("monthlyBudgetForm");
let incomeInput = document.getElementById("incomeInput");
let updateBudgetButton = document.getElementById("updateBudgetButton");

let nameInput = document.getElementById("nameInput");
let amountInput = document.getElementById("amountInput");
let addExpenseButton = document.getElementById("addExpenseButton");

let expenseList = document.getElementById("expenseList"); // Div

let totalExpenses = document.getElementById("totalExpenses"); //p

let remainingBalance = document.getElementById("remainingBalance"); //p

// Build a funciton that saves and displays the monthly budget
function updateBudget(event) {
    console.log("updateBudget fired.");
    event.preventDefault(); // prevent default page refresh
    monthlyIncome = parseInt(incomeInput.value); // convert string to number
    monthlyBudget.innerText = "$" + monthlyIncome;
    // clear form
    monthlyBudgetForm.reset();
    // Update remaining balance
    updateBalance();
}

// Add handler to update budget button
updateBudgetButton.onclick = updateBudget;

// Build a funciton that calculates the remaining balance
function updateBalance() {
    console.log("updateBalance fired.");
    let balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;

    // Update color of text
    if (balance < 0) {
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.add("green");
        remainingBalance.classList.remove("red");
    }
}

// Build a function that saves a new expense object and displays the expense in the app
function addExpense(event) {
    console.log("addExpense fired.");
    event.preventDefault(); // prevent default page refresh
    // Create an expense object
    let expense = {
        name: nameInput.value, // string
        amount: parseInt(amountInput.value), // convert to number
    };
    // Add expense to expense array
    expenses.push(expense);
    // Display the new expense in the app
    let newExpense = document.createElement("p"); // creating html p
    newExpense.innerText = expense.name + ": " + "$" + expense.amount;
    expenseList.appendChild(newExpense);
    // Total the expenses
    updateExpenseTotal();
}

// Add handler to add expense button
addExpenseButton.onclick = addExpense;

// Build a funciton that calculates the total of the expenses and displays it in the app
function updateExpenseTotal() {
    console.log("updateExpenseTotal fired.");
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i]; // object
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    totalExpenses.innerText = "$" + expenseTotal;
    // Update the remaining balance 
    updateBalance();
}