/*
Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and rotate the remaining digits to
get 329175. Keep the first two digits fixed in place and rotate again to get
321759. Keep the first three digits fixed in place and rotate again to get
321597. Finally, keep the first four digits fixed in place and rotate the
final two digits to get 321579. The resulting number is called the maximum
rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum
rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.
*/

function maxRotation(number) {
  let rotationStart = 0;
  const NUMBER_LENGTH = String(number).length;

  while (rotationStart < NUMBER_LENGTH - 1) {
    number = rotateRightmostDigits(number, NUMBER_LENGTH - rotationStart);
    rotationStart += 1;
  }

  return number;
}

function rotateRightmostDigits(number, count) {
  if (count < 2) {
    return number;
  } else {
    let indexToShift = String(number).length - count;
    let numberArr = String(number).split("");
    let shifted = numberArr.slice(0, indexToShift)
      .concat(numberArr.slice(indexToShift + 1), numberArr[indexToShift]);
    return Number(shifted.join(""));
  }
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
