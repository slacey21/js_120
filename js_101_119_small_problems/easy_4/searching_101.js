/*
Write a program that solicits six numbers from the user and logs a message 
that describes whether the sixth number appears among the first five numbers

*/

const input = require('readline-sync');

function checkSixthValue() {
  let firstFive = [];

  let firstVal = parseInt(input.question('Enter the 1st number: '));
  let secondVal = parseInt(input.question('Enter the 2nd number: '));
  let thirdVal = parseInt(input.question('Enter the 3rd number: '));
  let fourthVal = parseInt(input.question('Enter the 4th number: '));
  let fifthVal = parseInt(input.question('Enter the 5th number: '));
  let sixthVal = parseInt(input.question('Enter the last number: '));

  firstFive.push(firstVal);
  firstFive.push(secondVal);
  firstFive.push(thirdVal);
  firstFive.push(fourthVal);
  firstFive.push(fifthVal);

  let valuesAsString = `${firstVal}, ${secondVal}, ${thirdVal}, ${fourthVal}, ${fifthVal}`;

  if (firstFive.includes(sixthVal)) {
    console.log(`The number ${sixthVal} appears in ${valuesAsString}.`);
  } else {
    console.log(`The number ${sixthVal} does not appear in ${valuesAsString}.`);
  }

}

checkSixthValue();
