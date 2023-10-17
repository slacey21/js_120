// What will the following code log to the console? Explain why
// it logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
ANSWER:
This logs 3 to the console. This time, baz will still have the inherited 
foo property from qux, but will also have an "own" property also named 
foo with a value of 2, which takes precedence over the inherited property.
When baz.foo is called, JavaScript searches up the prototype chain for the foo
property, and returns the "own" foo property which equals 2.
*/

