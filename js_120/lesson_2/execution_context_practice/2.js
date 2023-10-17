// What will the following code output? Explain the difference, if any, between this output and that of problem 1.

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);

/*
ANSWER: This will output a reference to obj since it is invoked as a method.
*/