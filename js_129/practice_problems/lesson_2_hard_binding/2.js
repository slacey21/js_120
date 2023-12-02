// What will the following log?

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);


/*
ANSWER:
This will log undefined. the bind method returns a copy of an object
with this permanently set to whatever object is passed into bind as an
argument
*/