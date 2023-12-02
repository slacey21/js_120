// Consider the following two loops

let bar = {qux: 1};
let foo = Object.create(bar);

console.log("LOOP 1:");
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

console.log("\n");
console.log("LOOP 2:");

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

/*
If foo is an arbitrary object, will these loops always log the same results
to the console? Explain why they do or do not. If they don't always log the
same information, show an example of when the results differ.
*/

/*
ANSWER:
No, they do not always log the same results. for / in iterates over all
enumerable properties of the object as well as all enumerable properties
in the object's prototype chain. Object.keys() returns a list of the
properties defined direclty on the object passed in as an argument.

Example where different:

let bar = {qux: 1};
let foo = Object.create(bar);

loop 1:
qux: 1

loop 2:
logs nothing to the console because foo has no own properties
*/
