
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

    //test console.log

    console.log(rentmortgageValue);


});