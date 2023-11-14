// What will the following code do?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());


/*
ANSWER:
This code creates a class names Something with a constructor function that takes
no arguments and returns an instance of class Something, setting an instance
property "data" to the string value "Hello". Additionally, this class defines an
instance methos "dupData()" that returns the instance property "data"
concatenated with itself (i.e. data + data). Lastly, Something has a static
property defined called dupData that returns the string "ByeBye".

"thing" is created and assigned to an instance of class of Something. The
console.log(Something.dupData()) call will log "ByeBye" to the console
since it is invoking the static method dupData() on the constructor, and
console.log(thing.dupData()) will log "HelloHello" since it is invoked as
the instance method.
*/