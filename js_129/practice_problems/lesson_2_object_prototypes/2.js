/*
What will the following code log to the console? Explain why it logs that
value. Try to answer without running the code.
*/

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
ANSWER:

This will log 3 to the console. baz inherits from qux, but we have now 
defined a foo property directly on baz which will override the foo property
defined on qux.
*/


