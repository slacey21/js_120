// Consider the following code:
function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

// What happens in each of the following cases?
// Try to answer without running the code.

// Case 1:
let hello = new Hello();
hello.hi();
// logs 'Hello' because Hello delegates greet to Greeting

// Case 2:
let hello = new Hello();
hello.bye();
// logs a TypeError because neither Hello.prototype nor
// Greeting.prototype have a bye method 

// Case 3:
let hello = new Hello();
hello.greet();
// logs undefined since greet requires a message argument

// Case 4:
let hello = new Hello();
hello.greet('Goodbye');
// logs 'Goodbye'

// Case 5:
Hello.hi();
// undefined – the constructor does not have a static method called hi
// nor does it inherit from an object with hi defined on it



