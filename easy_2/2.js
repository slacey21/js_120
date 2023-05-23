/*
Write a program that will ask for user's name. The program will then 
greet the user. If the user writes "name!" then the computer yells back to the user.
*/

let readline = require('readline-sync');

console.log('What is your name? ');
let name = readline.question();

if (name.slice(-1) === '!') {
    console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`)
} else {
    console.log(`Hello ${name}.`);
}

