/*
Given the following data structure, sort the array so that the
sub-arrays are ordered based on the sum of the odd numbers that they contain.
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  return a.reduce((total, element) => total += (element % 2 === 0 ? 0 : element), 0) 
  - b.reduce((total, element) => total += (element % 2 === 0 ? 0 : element), 0);
});

console.log(arr);