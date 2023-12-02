// What will the following code output?
function func() {
  return this;
}

let context = func();

console.log(context);

/*
ANSWER:
this will log the global object
*/