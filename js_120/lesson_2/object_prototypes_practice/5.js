// Consider the following two loops:
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

// If foo is an arbitrary object, will these loops always log the
// same results to the console? Explain why they do or do not. If they
// don't always log the same information, show an example of when the
// results differ.

/*
ANSWER:
These loops will not alwasy log the same thing, because the for/in loop
will iterate over the properties in the object's prototype chain as well, 
where as Object.keys() only returns an array of the object's own properties.
*/

let a = {
  foo: 1,
};

let b = Object.create(a);
b.qux = 2;

/*
In the example above, if running these two loops over b, the first loop will
log the value of the qux property as well as the value of the inherited foo property.
The second loop will only log the value of b's own qux property.
*/