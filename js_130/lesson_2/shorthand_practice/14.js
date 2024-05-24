// Invoke your sum function using both a list of numbers and spread syntax
// from an array of numbers.

function sum(...args) {
  return args.reduce((total, arg) => total + arg, 0);
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(...arr));