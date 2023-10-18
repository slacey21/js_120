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
Since increment is invoked as a standalone function on line 8 (in the question)
the context will be bound to the global which does not have an a property. Thus,
calling incrementA will not be incrementing the a property on foo. foo.a will still be 0
*/