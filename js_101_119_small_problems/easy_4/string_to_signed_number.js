/*
Convert a string to a signed integer. May be +/- leading char.
*/


// eslint-disable-next-line max-lines-per-function
function stringToSignedInteger(numStr) {
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

  let value = 0;
  let numArr = numStr.split("");
  if (["+", "-"].includes(numArr[0])) {
    for (let idx = 1; idx < numArr.length; idx += 1) {
      value += DIGITS[numArr[idx]] * Math.pow(10, numArr.length - idx - 1);
    }
  } else {
    numArr.forEach((char, index) => {
      value += DIGITS[char] * Math.pow(10, numArr.length - index - 1);
    });
    return value;
  }

  if (numArr[0] === "+") {
    return value;
  } else {
    return value * -1;
  }

}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true