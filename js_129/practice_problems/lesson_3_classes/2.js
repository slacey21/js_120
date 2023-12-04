// What does the static modifier do? How would we call the method manufacturer?

class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}


/*
ANSWER:
that static modifier makes the manufacturer method a static method,
meaning that it is added as a property on the Television object
(a constructor is really just syntactic sugar for a constructor,
which is a function, which is an object) rather than being added
as a property on the Television.prototype object (from which any
instance of class Television would inherit).
We call the method manufacturer like:

Television.manufacturer()
*/

