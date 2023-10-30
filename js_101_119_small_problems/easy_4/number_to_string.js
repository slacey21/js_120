/*
convert unsigned integer to string with no built-in methods
*/

function integerToString(num) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let str = "";

  if (num === 0) {
    return "0";
  } else {
    while (num >= 1) {
      let lastDigit = num % 10;
      str = findKey(DIGITS, lastDigit) + str;
      num = Math.floor(num / 10);
    }

    return str;
  }
}

function findKey(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"