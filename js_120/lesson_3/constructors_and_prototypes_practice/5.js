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
This will log an error because the prototype object for ninja is already set
and this object does not have a swungSword method on it. Only after creating
ninja do we then reassign the constructor prototype object to the object
with the swingSword method on it.
*/
