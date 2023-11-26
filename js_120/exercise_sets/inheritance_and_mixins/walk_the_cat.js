/*
Using the following code, create a mixin named walkMixin that contains a
method named walk. This method should return Let's go for a walk! when
invoked. Include walkMixin in Cat and invoke walk on kitty.
*/

const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);


let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());
