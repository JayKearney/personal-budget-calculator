
// References to budget calculator fields

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
    console.log("Budget: ", budget);
    console.log("Expenses: ", expenses);
    if (budget > expenses) {
        resultAlert.innerHTML = "Well done";

    } else if(budget == expenses){
        resultAlert.innerHTML = "Careful";
    }else{
        resultAlert.innerHTML = "Bad";
    }
}

// Display the values

submitButton.addEventListener("click",function(e){

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





    switch (rentmortgageValue) {
    case "":
        alert("Insert a number in the Rent/Mortgage field");
        break;
    default:
        switch (electricityValue) {
        case "":
            alert("Insert a number in the Electricity field");
            break;
        default:
            switch (gasValue) {
            case "":
                alert("Insert a number in the Gas field");
                break;
            default:
                switch (internetphoneValue) {
                case "":
                    alert("Insert a number in the internet/phone field");
                    break;
                default:
                    switch (groceriesValue) {
                    case "":
                        alert("Insert a number in the Groceries field");
                        break;
                    default:
                        switch (transportationValue) {
                        case "":
                            alert("Insert a number in the Transportation field");
                            break;
                        default:
                            switch (subscriptionsValue) {
                            case "":
                                alert("Insert a number in the subscription field");
                                break;
                            default:
                                switch (entertainmentValue) {
                                case "":
                                    alert("Insert a number in the entertainment field");
                                    break;
                                default:
                                    switch (personalValue) {
                                    case "":
                                        alert("Insert a number in the Personal field");
                                        break;
                                    default:
                                        switch (budgetValue) {
                                        case "":
                                            alert("Insert a number in the Budget field");
                                            break;
                                        default:


                                            // Calculation when all values have been entered

                                            var budget = budgetValue;

                                            var expenses = [parseInt(rentmortgageValue) , parseInt(electricityValue) , parseInt(gasValue) , parseInt(internetphoneValue) , parseInt(groceriesValue) , parseInt(transportationValue) , parseInt(subscriptionsValue) , parseInt(entertainmentValue) , parseInt(personalValue)];
                                            var sum = 0;
                                            for (let i = 0; i < expenses.length; i++) {
                                                sum += expenses[i];
                                            }
                                            
                                            balance = parseInt(budgetValue) - sum;

                                            expensestotalInput.value = balance;

                                            compareBudgetwithExpenses(budget,sum);
                                            break;
                                        }

                                        break;
                                    }

                                    break;
                                }

                                break;
                            }

                            break;
                        }

                        break;
                    }

                    break;
                }

                break;
            }

            break;
        }

        break;
    }
});