// Use destructuring to extract the first element from arr to a new
// variable called first and extract the remaining elements into a new array
// called arr2.

const arr = [1, 2, 3];

let [ first, ...arr2 ] = arr;

console.log(first, arr2);