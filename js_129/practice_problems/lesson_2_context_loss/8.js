// What will the value of foo.a be after this code runs?

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

/*
ANSWER:
foo.a will still be 0 since the increment() invocation on line 10
loses its context by being executed inside a function. When invoked
JavaScript looks for an a property on the global object since this
refers to the global object when increment is invoked.
*/
