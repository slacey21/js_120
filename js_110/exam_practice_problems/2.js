// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

function minimumSum(arr) {
  if (arr.length < 5) return null;
  let sums = [];
  for (let idx = 0; idx <= arr.length - 5; idx += 1) {
    let consecutiveFive = arr.slice(idx, idx + 5);
    let consecutiveFiveSum = consecutiveFive.reduce((total, current) => {
      total += current;
      return total;
    }, 0);
    sums.push(consecutiveFiveSum);
  }
  return sums.sort((a, b) => a - b)[0];
}



// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".
