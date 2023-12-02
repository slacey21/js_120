// What will the following code output?

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);

/*
ANSWER:
This will log obj. Since func is invoked with obj as its calling object,
this will be set bound to obj as the function execution context.
*/