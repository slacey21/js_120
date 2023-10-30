function multiply(numbers, multiplyFactor) {
  let multipliedNumbers = [];

  let counter = 0;
  while (counter < numbers.length) {
    multipliedNumbers.push(numbers[counter] * multiplyFactor);
    counter += 1;
  }

  return multipliedNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3));