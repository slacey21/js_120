/*
convert signed integer to string with no built-in methods
*/

function signedIntegerToString(num) {
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let str = "";
  let absNum = Math.abs(num);

  do {
    let lastDigit = absNum % 10;
    str = DIGITS[lastDigit] + str;
    absNum = Math.floor(absNum / 10);
  } while (absNum > 0);

  switch (Math.sign(num)) {
    case 1:
      return "+" + str;
    case -1:
      return "-" + str;
    default:
      return str;
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");