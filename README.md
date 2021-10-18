# Life in Ireland Budget Calculator

Life in Ireland Budget Calculator it is meant to be a tool for the everyday life in Ireland. It is a simple but yet powerful web application to keep track of your budget. This App allows the user to know how much money is being spent or saved. One can plan the budget wisely and save effectively. It also uses humour when providing the calculation result. Therefore, it targets a younger croud, mainly of college students or young people that recently moved to Ireland. Ireland is known for it's high rent prices and variety of entertainment, therefore  this single page web app will help you calculate and visualise your budget to stay ahead of the game.

![Responsice Mockup](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/responsive%20design.png)

### Existing Features

- Single one page application featuring the colour of the irish flag
- Responsive on all device sizes
- Interactive elements

- __Budget Field__

  - Description inside field on what value to enter
  - Availability to move the arrow up and down to change numbers inside
  - If no value is entered while pressing the "submit" button, the alert below appears:
  

![Budget](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/budget-field-akert.png)

- __Expenses fields__

  - Different expenses names are displayed inside the boxes.
  - If no value is entered in any of them while pressing the "submit" button, alear pop-up messages with the specific field name with appear. Example here:

![Expenses](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/electricity%20field%20alert.png)

- __Calculate your Balance field__

  - The result of the calculation appears in this box after pressing the submit button.
  - The user will be able to see the amount left after paying all expenses including entertainment, therefore allowing them to decide how much money to spend in non essential items and save money if they desire. 

![Balance](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/balance-field.png)

- __Balance messages__

  - After selecting the submit button, a message will appear to either warn, congratulate or prevent the user on their balance left:

![Expenses higher than Budget](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/expenses-higher.png)

![Expenses lower than Budget](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/expenses-less.png)

![Expenses same amount as Budget](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/expenses-equal.png)

### Features Left to Implement

- Second page that will estimate your taxes owed.

## Testing 

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/html%20validator.png). The warning message refers to an empty h2, however that was necessary to allow for the result messages to appear there with that size and location. Therefore, no error.
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/css-validator.png)
- Javascript
  - No errors were found when passing through the official [(jshint) validator](https://github.com/JayKearney/personal-budget-calculator/blob/main/assets/images/jshint.png)


### Fixed Bugs

- Javascript:
  - Calculation returning an "Error is Naan" despite of ParseInt function. .value was missing from the electricity field.
  - Background image not appearing when site was deployed. Fixed it by entering a relative path instead of absolute.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://jaykearney.github.io/personal-budget-calculator/


## Credits 

### Content 

- Javascript
  - Instructions on how to implement getelementbyid, value if statement and looping an array were taken from Code Institute course.
  - Understanding function e (event) was taken from: [Stackoverflow] https://stackoverflow.com/questions/10323392/in-javascript-jquery-what-does-e-mean
  - Instructions on how to implement event listener click were taken from: [W3schools] https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  - The colour pallete of the entire website was inspired by the Irish Flag colours
  
### Media

- The background image used was taken from [flickr] https://www.flickr.com/

## Other General Project Advice

I wanted to make a simple one page application, that was useful and that would allow me to focus on learning Javascript.

I spent most of my time refactoring my JS code. After fixing a BUG I had, the calculator was working, however it wasn't clean code. Therefore I learned a lot of how to convert it to a more user friendly and professional one.
