// What will the following code output

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
NaN -> foo() is invoked with the global object as context
      undefined + undefined = NaN
5
*/
