// Build a program that logs when the user will retire and how many 
// more years the user has to work until retirement.

let readline = require('readline-sync');

console.log('What is your age? ');
let age = Number(readline.prompt());

console.log('At what age would you like to retire? ');
let retirementAge = Number(readline.prompt());

let currentYear = new Date().getFullYear();
let yearsToRetirement = retirementAge - age;
let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsToRetirement} years of work to go!`);




