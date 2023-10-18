// What will the following code log to the console?

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

/*
ANSWER:
This will not log anything to the console because foo is not invoked.

*/