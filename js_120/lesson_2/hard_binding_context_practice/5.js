// What will the code below output

let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

/*
ANSWER:
This will log "Amazebulous" because, despite being invoked with call attempting to bind
the context of bar to otherObj, bar is permanently bound to obj, so this.a refers to the 
a property on obj. Context cannot be changed once bound using bind.
*/