/*

2.Write a program named age.js that includes someone's age and then calculates and 
reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

*/

let rlSync = require('readline-sync');
let age = parseInt(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);

for (let i = 1; i < 5; i++) {
    console.log(`In ${i * 10} years, you will be ${age + i * 10} years old.`);
}