// What will the following code log to the console? Explain why it logs that
// value. Try to answer without running the code.


let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*
ANSWER:
This code will log 2 to the console. The first line creates an object
called qux with a 'foo' property whose value is 1. The second line creates
an object baz and assigns the qux object as its prototype. This means that 
baz inherits all the properties of the qux object, so baz will have an 
inherited property named 'foo' with a value of 1. Adding these two values together
will log 2 to the console.
*/