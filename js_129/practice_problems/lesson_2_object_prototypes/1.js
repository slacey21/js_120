// What will the following code log to the console? Explain why it
// logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*

ANSWER: This will log 2 to the console. Object.create creates an object
whose internal [[Prototype]] property refers to the object passed in as 
an argument to Object.create(). Here, Object.create(qux) creates an empty
object whose prototype refers to qux. This empty object is now assigned to 
baz. Although baz does not have an "own" property named foo, using the 
prototype chain, the baz delegates the foo property to its prototype, qux. qux
does have a foo property whose value is 1, this 1 + 1 will log 2 to the console.
*/

