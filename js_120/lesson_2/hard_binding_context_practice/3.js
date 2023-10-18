// What will the following code output?

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());
console.log(bar());

/*
ANSWER: 
foo.bind(obj) returns a foo function that is bound to the obj object and is 
assigned to bar. 

console.log(foo()) logs NaN since the global object does not have 
a or b properties.

console.log(bar()) logs 5.
*/