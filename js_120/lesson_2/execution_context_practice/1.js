// What will the following code output? Try to determine the results without running the code.

function func() {
  return this;
}

let context = func();

console.log(context);


/*
ANSWER: This will return a reference to the global object (global in Node)
since the func() function is invoked as a regular function.
*/