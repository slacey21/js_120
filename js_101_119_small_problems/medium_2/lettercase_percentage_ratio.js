/*
Write a function that takes a string and returns an object containing
the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/

const ALPHA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function letterPercentages(inputStr) {
  let percentages = {lowercase: 0,
    uppercase: 0,
    neither: 0};

  determineCases(inputStr, percentages);

  Object.keys(percentages).forEach(key => {
    percentages[key] = String(((percentages[key] / inputStr.length) * 100)
      .toFixed(2));
  });

  return percentages;
}

function determineCases(inputStr, percentageObj) {
  inputStr.split("").forEach(char => {
    if (ALPHA.includes(char.toLowerCase())) {
      if (char === char.toLowerCase()) {
        percentageObj["lowercase"] += 1;
      } else {
        percentageObj["uppercase"] += 1;
      }
    } else {
      percentageObj["neither"] += 1;
    }
  });
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


/* PEDAC PRACTICE
PROBLEM:
  Inputs: String
  Outputs: Object with the following properties:
    - lowercase : string representation of the percentage (rounded to two decimal places)
                  of characters in the input string that are lowercase alphabetic characters
    - uppercase : string representation of the percentage (rounded to two decimal places)
                  of characters in the input string that are uppercase alphabetic characters
    - neither : string representation of the percentage (rounded to two decimal places)
                  of characters in the input string that are not alphabetic characters
  
Examples & Test Cases:
  - Provided already
  - spaces are counted as characters

Data Structure:
  - Object

Algorithm:
  1. Initialize an object to serve as our output value. The object values 
    will be integer values to start as we count the number of chars in 
    the string that satisfy each criteria
  2. Convert the input string to an array by splitting the string on ""
  3. Iterate over each element of the array and determine :
    a. If the character is alphabetic:
      i. The character is uppercase:
        - increment the uppercase value by 1
      ii. The character is lowercase
        - increment the lowercase value by 1
    b. If the character is not alphabetic:
      i. increment the "neither" value by 1
  4. Update the value of each property in the object to be a percentage:
    a. reassign each value to be the count divided by the length of the input
    string
    b. make the value a fixed decimal number to 2 places
    c. convert value to string
  5. Return the object
*/
