// Alter the myBind function written in the previous exercise to support partial
// function application of additional arguments to the original function.

function myBind(func, contextObj, ...args) {
  let partialArgs = args;
  return function(...rest) {
    return func.apply(contextObj, partialArgs.concat(rest));
  };
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15