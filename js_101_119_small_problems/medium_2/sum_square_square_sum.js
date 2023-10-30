/*
Write a function that computes the difference between the square
of the sum of the first count positive integers and the sum of the
squares of the first count positive integers.
*/

function sumSquareDifference(count) {
  return squareOfSum(count) - sumOfSquare(count);
}

function squareOfSum(count) {
  let sum = 0;
  for (let iter = 1; iter <= count; iter += 1) {
    sum += iter;
  }
  return sum ** 2;
}

function sumOfSquare(count) {
  let sum = 0;
  for (let iter = 1; iter <= count; iter += 1) {
    sum += iter ** 2;
  }
  return sum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150