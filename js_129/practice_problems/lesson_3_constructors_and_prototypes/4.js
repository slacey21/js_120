// What will the following code output to the console?


function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*

ANSWER:
This will output true to the console. We define a swingSword method
on the Ninja constructor's prototype object that returns this.swung.
ninja, having been created with the Ninja constructor, is an instance
of Ninja and thus inherits from the object Ninja.prototype. Although
ninja does not have its own swingSword() method, JavaScript searches
ninja's prototype chain and finds swingSword() defined on Ninja.prototype.
*/