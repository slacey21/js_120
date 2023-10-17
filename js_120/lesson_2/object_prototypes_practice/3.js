// What will the following code log to the console? Explain why
// it logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/*
ANSWER:
This will log 4. The prototype of baz is a reference to the 
qux object, this when updating the properties on qux, these 
properties which are inherited by baz are also updated.
*/