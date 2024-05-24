// Use rest syntax to create a function sum that takes an arbitrary number
// of arguments and returns their sum.

function sum(...args) {
  return args.reduce((total, arg) => total + arg, 0);
}

console.log(sum(1, 2, 3, 4, 5));

