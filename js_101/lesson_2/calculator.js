// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// import dependencies
const rlsync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');


// checks whether a value is a valid number
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// formats prompts when output to the console
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to get messages in chosen language
function messages(message, lang) {
  return MESSAGES[lang][message];
}


// init
let anotherOp;

// welcome message
prompt(messages["welcome"]);

// get language
prompt("Language: ");
let language = rlsync.question();

//check if valid language
while (!['es', 'en'].includes(language)) {
  prompt("Please enter a valid language - English or Spanish: ");
  language = rlsync.question();
}

do {
  // get user input for furst number in calculation
  prompt(messages("getFirstNum", language));
  let number1 = rlsync.question();

  // repeat prompt until user inputs a valid number
  while (invalidNumber(number1)) {
    prompt(messages("invalidNumber", language));
    number1 = rlsync.question();
  }

  // get user input for second number in calculation
  prompt(messages("getSecondNum", language));
  let number2 = rlsync.question();

  // repeat prompt until user inputs a valid number
  while (invalidNumber(number2)) {
    prompt(messages("invalidNumber", language));
    number2 = rlsync.question();
  }

  // ask user to choose operation type
  prompt(messages("operationChoice", language));
  let operation = rlsync.question();

  // repeat prompt until user inputs a valid operation choice
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages("invalidOperation", language));
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
  prompt(messages("result", language)  + output);

  // prompt the user to perform another operation
  prompt(messages("anotherOperation", language));
  anotherOp = rlsync.question();

  // repeat prompt until user inputs a valid answer for another operation
  while (!['1', '2'].includes(anotherOp)) {
    prompt(messages("invalidAnother", language));
    anotherOp = rlsync.question();
  }
} while (anotherOp === '1');