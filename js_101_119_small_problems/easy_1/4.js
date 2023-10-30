/*
Build a program that asks the user to enter the length and width of
 a room in meters, and then logs the area of the room to the console
  in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the
readlineSync.prompt method to collect user input.
*/

let readline = require('readline-sync');

let length = Number(readline.question('Enter the length of the room in meters: '));
let width = Number(readline.question('Enter the width of the room in meters: '));

let areaInSquareMeters = length * width;
let areaInSquareMetersRounded = Math.floor(areaInSquareMeters * 100) / 100;

let areaInSquareFeet = areaInSquareMeters * 10.7639;
let areaInSquareFeetRounded = Math.floor(areaInSquareFeet * 100) / 100;

console.log(`The area of the room is ${areaInSquareMetersRounded} square meters \
(${areaInSquareFeetRounded} square feet).`);