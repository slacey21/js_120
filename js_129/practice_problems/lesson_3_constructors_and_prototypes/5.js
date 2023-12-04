// What will the following code output and why?

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());

/*
This will log an error. We are reassigning the object referenced by
Ninja.prototype. ninja still inherits from the original object referenced
by Ninja.prototype, which does not have a swingSword method defined on it.
*/