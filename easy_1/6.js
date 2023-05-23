/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product
of all numbers between 1 and the entered integer, inclusive.
*/

let readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let userNumber = Number.parseInt(readline.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let operationChoice = readline.prompt();

let consecutiveSum = 0;
let consecutiveProduct = 1;

if (operationChoice === 's') {
    for (let counter = 1; counter <= userNumber; counter ++) {
        consecutiveSum += counter;
    }

    console.log(`The sum of the integers between 1 and ${userNumber} is ${consecutiveSum}`);
} else {
    for (let counter = 1; counter <= userNumber; counter ++) {
        consecutiveProduct *= counter;
    }

    console.log(`The product of the integers between 1 and ${userNumber} is ${consecutiveProduct}`);
}


