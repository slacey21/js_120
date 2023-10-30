/*
How would you order the following array of number strings by
descending numeric value (largest number value to smallest)?
*/

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
console.log(arr);

