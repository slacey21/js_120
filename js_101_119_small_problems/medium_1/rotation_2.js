/*
Write a function that rotates the last count digits of a number. To perform
the rotation, move the first of the digits that you want to rotate to the end
and shift the remaining digits to the left.
*/


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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917