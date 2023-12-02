// What will the following code output?

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/*
ANSWER:
This will log:
Hello from the global scope!
Hello from the function scope!

We add a deliverMessage method on the foo object whose value 
refers to the globally defined deliverMessage function. DeliverMessage now
has this set to foo when foo.deliverMessage() is called, since the calling
object serves as implicit execution context for a method invocation.
*/