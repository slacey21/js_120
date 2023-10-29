// What will the following code log to the console and why?

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*
This will log true to the console. "this" in swingSword, despite not being a property on the 
ninja object, but on the prototype object of ninja, will still be bound to the calling object
which is ninja. ninja.swing is set to true upon creation.
*/