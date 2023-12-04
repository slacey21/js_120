// Create a class named Greeting that has a single method named greet.
// The method should take a string argument, and it should print that
// argument to the console.

class Greeting {
  greet(greeting) {
    console.log(greeting);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    super.greet("Goodbye");
  }
}

let hello = new Hello();
hello.hi();

let goodbye = new Goodbye();
goodbye.bye();