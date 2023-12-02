// What will the following code log to the console? Explain why it logs that
// value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);


/*
ANSWER:
This will log 4 to the console. Again, baz does not have a foo property, 
so JavaScript searches the prototype chain to find a foo property on the
closest object in baz's prototype chain. Keep in mind, the objects in this
protytype chain are references to the objects, so any updates made to an
object in the prototype chain will be reflected when properties are delegated
by downstream objects. Thus, the reassignment of qux.foo will be reflected
when baz.foo delegates to qux.foo.
*/

