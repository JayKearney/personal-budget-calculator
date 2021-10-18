// References to budget calculator fields

const budgetInput = document.getElementById('budget-input');
const rentmortgageInput = document.getElementById('rent-mortgage-input');
const electricityInput = document.getElementById('electricity-input');
const gasInput = document.getElementById('gas-input');
const internetphoneInput = document.getElementById('int-phone-input');
const groceriesInput = document.getElementById('groceries-input');
const transportationInput = document.getElementById('transp-input');
const subscriptionsInput = document.getElementById('subs-input');
const entertainmentInput = document.getElementById('ent-input');
const personalInput = document.getElementById('personal-input');
const submitButton = document.getElementById('submit-button');
const expensestotalInput = document.getElementById('expenses-total');
var resultAlert = document.getElementById('result-alert');

function compareBudgetwithExpenses(budget, expenses) {
    console.log('Budget: ', budget);
    console.log('Expenses: ', expenses);
    if (budget > expenses) {
        resultAlert.innerHTML = 'Well done';
    } else if (budget == expenses) {
        resultAlert.innerHTML = 'Careful';
    } else {
        resultAlert.innerHTML = 'Bad';
    }
}

// Display the values

submitButton.addEventListener('click', function (e) {
    // What will happen when the user clicks the button

    let budgetValue = budgetInput.value;
    console.log(budgetValue);
    let rentmortgageValue = rentmortgageInput.value;
    console.log(rentmortgageValue);
    let electricityValue = electricityInput.value;
    console.log(electricityValue);
    let gasValue = gasInput.value;
    console.log(gasValue);
    let internetphoneValue = internetphoneInput.value;
    console.log(internetphoneValue);
    let groceriesValue = groceriesInput.value;
    console.log(groceriesValue);
    let transportationValue = transportationInput.value;
    console.log(transportationValue);
    let subscriptionsValue = subscriptionsInput.value;
    console.log(subscriptionsValue);
    let entertainmentValue = entertainmentInput.value;
    console.log(entertainmentValue);
    let personalValue = personalInput.value;
    console.log(personalValue);

    //All required values are stored together with a label

    const requiredValues = [
        { label: 'Rent/Mortgage', value: rentmortgageValue },
        { label: 'Electricity', value: electricityValue },
        { label: 'Gas', value: gasValue },
        { label: 'Internet/Phone', value: internetphoneValue },
        { label: 'Groceries', value: groceriesValue },
        { label: 'Transportation', value: transportationValue },
        { label: 'Subscription', value: subscriptionsValue },
        { label: 'Entertainment', value: entertainmentValue },
        { label: 'Personal', value: personalValue },
        { label: 'Budget', value: budgetValue },
    ];

    // Go through each object and check whether a value has been inputted.
    // If a missing value is found, an alert with the correct label is displayed

    for (let i = 0; i < requiredValues.length; i++) {
        if (requiredValues[i].value === '') {
            alert(`Insert a number in the ${requiredValues[i].label} field`);
            return;
        }
    }

    // Calculation when all values have been entered

    let budget = budgetValue;

    const expenses = [
        parseInt(rentmortgageValue),
        parseInt(electricityValue),
        parseInt(gasValue),
        parseInt(internetphoneValue),
        parseInt(groceriesValue),
        parseInt(transportationValue),
        parseInt(subscriptionsValue),
        parseInt(entertainmentValue),
        parseInt(personalValue),
    ];

    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i];
    }

    let balance = parseInt(budgetValue) - sum;
    expensestotalInput.value = balance;

    compareBudgetwithExpenses(budget, sum);
});