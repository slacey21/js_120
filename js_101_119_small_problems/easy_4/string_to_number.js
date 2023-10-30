/*
Write a function that takes a string of digits and returns the appropriate
number as an integer.
*/

function stringToInteger(strNum) {
  let strArr = strNum.split("");
  let num = 0;
  strArr.forEach((char, index) => {
    let numValue = determineNumber(char);
    num += numValue * Math.pow(10, strNum.length - 1 - index);
  });

  return num;
}

// eslint-disable-next-line max-lines-per-function
function determineNumber(char) {
  switch(char) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
  }
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("123456"));