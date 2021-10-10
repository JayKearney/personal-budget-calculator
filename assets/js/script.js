
// Made references to budget calculator fields

const budgetInput = document.getElementById("budget-input");
const rentmortgageInput = document.getElementById("rent-mortgage-input");
const electricityInput = document.getElementById("electricity-input");
const gasInput = document.getElementById("gas-input");
const internetphoneInput = document.getElementById("int-phone-input");
const groceriesInput = document.getElementById("groceries-input");
const transportationInput = document.getElementById("transp-input");
const subscriptionsInput = document.getElementById("subs-input");
const entertainmentInput = document.getElementById("ent-input");
const personalInput = document.getElementById("personal-input");
const submitButton = document.getElementById("submit-button");
const expensestotalInput = document.getElementById("expenses-total");
var resultAlert = document.getElementById("result-alert");

function compareBudgetwithExpenses(budget,expenses){

    if (budget > expenses) {
        resultAlert.innerHTML = "Well done";

    } else switch (budget) {
    case expenses:
        resultAlert.innerHTML = "Be careful";
        break;
    default:
        resultAlert.innerHTML = "Wrong";
        break;
    }
}

// Display the values

submitButton.addEventListener("click",function(e){

    // What will happen when the user clicks the button
    
    let rentmortgageValue = rentmortgageInput.value;
    let electricityValue = electricityInput.value;
    let gasValue = gasInput.value;
    let internetphoneValue = internetphoneInput.value;
    let groceriesValue = groceriesInput.value;
    let transportationValue = transportationInput.value;
    let subscriptionsValue = subscriptionsInput.value;
    let entertainmentValue = entertainmentInput.value;
    let personalValue = personalInput.value;
    let budgetValue = budgetInput.value;


    // What will happen if a field is empty

    if(rentmortgageValue == ""){
        alert("Insert a number in the Rent/Mortgage field")
    }else if(electricityValue == ""){
        alert("Insert a number in the Electricity field") 
    }else if(gasValue == ""){
         alert("Insert a number in the Gas field")
    }else if(internetphoneValue == ""){
            alert("Insert a number in the internet/phone field") 
    }else if(groceriesValue == ""){
        alert("Insert a number in the Groceries field") 
    }else if(transportationValue == ""){
        alert("Insert a number in the Transportation field") 
    }else if(subscriptionsValue == ""){
        alert("Insert a number in the subscription field") 
    }else if(entertainmentValue == ""){
            alert("Insert a number in the entertainment field") 
    }else if(personalValue == ""){
        alert("Insert a number in the Personal field") 
    }else if(budgetValue == ""){
        alert("Insert a number in the Budget field") 
    }else {

        // Calculation when all values have been entered
        
        /*
        var budget = budgetValue;
        var expenses = (parseInt(budgetValue) - (parseInt(rentmortgageValue) + parseInt(electricityValue) + parseInt(gasValue) + parseInt(internetphoneValue) + parseInt(groceriesValue) + parseInt(transportationValue) + parseInt(subscriptionsValue) + parseInt(entertainmentValue) + parseInt(personalValue)));
        */

        var expenses = [parseInt(rentmortgageValue) , parseInt(electricityValue) , parseInt(gasValue) , parseInt(internetphoneValue) , parseInt(groceriesValue) , parseInt(transportationValue) , parseInt(subscriptionsValue) , parseInt(entertainmentValue) , parseInt(personalValue)];
        var sum = 0;
            for (let i = 0; i < expenses.length; i++) {
                sum += expenses[i]
            }
        balance = parseInt(budgetValue) - sum;

        expensestotalInput.value = balance;

        compareBudgetwithExpenses(budget,expenses);
    }

});