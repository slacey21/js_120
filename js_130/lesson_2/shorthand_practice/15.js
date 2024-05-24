// Use spread syntax to invoke the prod function with arr and explain what 
// is happening as part of your answer.


const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));

// prod(...arr) is functioning like prod(arr[0], arr[1], arr[2])
// even though prod only uses two parameters, javascript will ignore any
// additional arguments supplied
