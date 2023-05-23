/*
Write a program that prompts the user for two positive integers, and 
then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. Do not 
worry about validating the input.
*/

let readline = require('readline-sync');

console.log('Enter the first number: ');
let number1 = Number.parseInt(readline.question());

console.log('Enter the second number: ');
let number2 = Number.parseInt(readline.question());

console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);
console.log(`${number1} ** ${number2} = ${number1 ** number2}`);



