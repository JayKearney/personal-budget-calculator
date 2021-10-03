
// Made references to budget calculator fields

var rentmortgageInput = document.getElementById("rent-mortgage-input");
var electricityInput = document.getElementById("electricity-input");
var gasInput = document.getElementById("gas-input");
var internetphoneInput = document.getElementById("int-phone-input");
var groceriesInput = document.getElementById("groceries-input");
var transportationInput = document.getElementById("transp-input");
var subscriptionsInput = document.getElementById("subs-input");
var personalInput = document.getElementById("personal-input");
var budgetInput = document.getElementById("budget-input");
var submitButton = document.getElementById("submit-button");
var expensestotalInput = document.getElementById("expenses-total");

function compareExpenseswithBudget(expenses,budget){

    if(expenses > budget){    

    }else if(budget == expenses){  

    }else{
    //budget > expenses
    }
}



// Display the values

submitButton.addEventListener("click",function(e){

    // What will happen when the user clicks the button
    
    var rentmortgageValue = rentmortgageInput.value;
    var electricityValue = electricityInput;
    var gasValue = gasInput.value;
    var groceriesValue = groceriesInput.value;
    var transportationValue = transportationInput.value;
    var subscriptionsValue = subscriptionsInput.value;
    var personalValue = personalInput.value;
    var budgetValue = budgetInput.value;

    // What will happen if a field is empty

    if(rentmortgageValue == ""){
        alert("Insert a number in the Rent/Mortgage field")
    }else if(electricityValue == ""){
        alert("Insert a number in the Electricity field") 
    }else if(gasValue == ""){
    alert("Insert a number in the Gas field") 
    }else if(groceriesValue == ""){
        alert("Insert a number in the Groceries field") 
    }else if(transportationValue == ""){
        alert("Insert a number in the Transportation field") 
    }else if(subscriptionsValue == ""){
        alert("Insert a number in the subscription field") 
    }else if(personalValue == ""){
        alert("Insert a number in the Personal field") 
    }else if(budgetValue == ""){
        alert("Insert a number in the Budget field") 
    }else {

        // Calculation when all values have been entered
        var expenses = parseInt(rentmortgageValue) + parseInt(electricityValue) + parseInt(gasValue) + parseInt(groceriesValue) + parseInt(transportationValue) + parseInt(subscriptionsValue) + parseInt(personalValue);
        var budget = budgetValue;

        expensestotalInput.value = expenses;

        compareExpenseswithBudget(expenses,budget);
    }

});