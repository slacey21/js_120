/*
PESUDOCODE:
- Prompt user for the following inputa:
  - loan amount
  - APR
  - loan duration
- handle input arguments to ensure correctness, re-prompt if incorrect
- calculate the following values from user inputs:
  - monthly payment
  - monthly interest rate
  - loan duration in months
- return monthly payment amount in dollar and cents formatted format
*/


// import dependencies
let rlsync = require('readline-sync');

// define functions for message prompts
function message(prompt) {
  console.log(`=> ${prompt}`);
}

// define regex values to check against inputs
let amountRegex = /^[$]|,/g;

// greeting message and prompt for loan amount, APR, and loan duration
// with invalid input handling
message('Welcome to the loan calculator!');

message('Please enter your loan amount: ');
let loanAmount = rlsync.question();

// replace any leading '$' or all instances ',', then parse floating number val
loanAmount = parseFloat(loanAmount.replaceAll(amountRegex, ''));

while ((!loanAmount) || (loanAmount < 0)) {
  // eslint-disable-next-line no-multi-str
  message('Invalid loan amount. Expected the following formats (dollar sign optional): \n \
  1) XXXXX 2) XXXXX.XX 3) XX,XXX 4) XX,XXX.XX');

  message('Please enter your loan amount: ');
  loanAmount = parseFloat(rlsync.question().replaceAll(amountRegex, ''));
}

message('Please enter your Annual Percentage Rate: ');
let annualPercentageRate = parseFloat(rlsync.question());

while ((!annualPercentageRate) || (annualPercentageRate < 0)) {
  // eslint-disable-next-line no-multi-str
  message('Invalid Annual Percentage Rate. Expected the following non-zero formats (% sign optional): \n \
  1) X 2) X.XX');

  message('Please enter your Annual Percentage Rate: ');
  annualPercentageRate = parseFloat(rlsync.question());
}

let verifyAPR;
while ((annualPercentageRate < 1) || (verifyAPR !== '1')) {
  message(`Are you sure your APR of ${annualPercentageRate}% is correct?: \n 1)Yes 2)No`);
  verifyAPR = rlsync.question();
  if (verifyAPR === '2') {
    message('Please enter your Annual Percentage Rate: ');
    annualPercentageRate = parseFloat(rlsync.question());
  }
}

message('Please choose a unit for your loan duration: \n 1) Months 2) Years');
let loanUnit = rlsync.question();

while (!['1', '2'].includes(loanUnit)) {
  // eslint-disable-next-line no-multi-str
  message('Invalid loan unit choice. Please pick from the following options: \n \
  1) Months 2) Years');

  loanUnit = rlsync.question();
}

message('Please enter your loan duration: ');
let loanDuration = parseFloat(rlsync.question());

while (!loanDuration) {
  // eslint-disable-next-line no-multi-str
  message('Invalid loan duration. Expected the following duration formats: \n \
  1) XX 2) XX.XX');

  message('Please enter your loan duration: ');
  loanDuration = parseFloat(rlsync.question());
}


// calculate remaining values and return monthly payment amount
let monthlyInterest = (annualPercentageRate / 100) / 12;
let loanDurationMonths;

if (loanUnit === '1') {
  loanDurationMonths = loanDuration;
} else {
  loanDurationMonths = loanDuration * 12;
}

// eslint-disable-next-line max-len
let monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanDurationMonths))));

monthlyPayment = Math.round(monthlyPayment * 100) / 100;

message(`Your monthly payment is $${monthlyPayment}`);
