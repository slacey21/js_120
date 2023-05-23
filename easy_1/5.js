/*
Create a simple tip calculator. The program should prompt for a bill amount 
and a tip rate. The program must compute the tip, and then log both the tip 
and the total amount of the bill to the console. You can ignore input 
validation and assume that the user will enter numbers.
*/

let readline = require('readline-sync');

console.log('What is the bill? ');
let billAmount = Number.parseFloat(readline.prompt());

console.log('What is the tip percentage? ');
let tipPercentage = Number.parseFloat(readline.prompt());

let tipAmount = Math.floor((billAmount * (tipPercentage / 100)) * 100) / 100;
let totalAmount = Math.floor((billAmount + tipAmount) * 100) / 100;

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${totalAmount}`);