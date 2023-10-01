// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
ALGORITHM:
1. Sort the array
2. Initialize empty array to store pairs and closeness
3. Iterate over sorted array from beginning until second to last element
4. Push an array of [curr, next, (next - curr)] to array from part 2
5. Sort array from part 2 by (next - curr) value in each element
6. return first two elements of subarray with lowest diff
*/


function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let differences = [];

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    differences.push([arr[idx], arr[idx + 1], arr[idx + 1] - arr[idx]]);
  }

  differences.sort((a, b) => {
    return a[2] - b[2];
  });

  return differences[0].slice(0, 2);

}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]