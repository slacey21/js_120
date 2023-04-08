// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// checks whether a value is a valid number
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// formats prompts when output to the console
function prompt(message) {
  console.log(`=> ${message}`);
}

// import dependencies
const rlsync = require('readline-sync');
const messages = require('./calculator_messages.json');

// init
let anotherOp;

// welcome message
prompt(messages["welcome"]);

do {
  // get user input for furst number in calculation
  prompt(messages["getFirstNum"]);
  let number1 = rlsync.question();

  // repeat prompt until user inputs a valid number
  while (invalidNumber(number1)) {
    prompt(messages["invalidNumber"]);
    number1 = rlsync.question();
  }

  // get user input for second number in calculation
  prompt(messages["getSecondNum"]);
  let number2 = rlsync.question();

  // repeat prompt until user inputs a valid number
  while (invalidNumber(number2)) {
    prompt(messages["invalidNumber"]);
    number2 = rlsync.question();
  }

  // ask user to choose operation type
  prompt(messages["operationChoice"]);
  let operation = rlsync.question();

  // repeat prompt until user inputs a valid operation choice
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages["invalidOperation"]);
    operation = rlsync.question();
  }

  // initialize final output value
  let output;

  // perform operation depending on user's choice
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // output final result to the console
  prompt(messages["result"]  + output);

  // prompt the user to perform another operation
  prompt(messages["anotherOperation"]);
  anotherOp = rlsync.question();

  // repeat prompt until user inputs a valid answer for another operation
  while (!['1', '2'].includes(anotherOp)) {
    prompt(messages["invalidAnother"]);
    anotherOp = rlsync.question();
  }
} while (anotherOp === '1');