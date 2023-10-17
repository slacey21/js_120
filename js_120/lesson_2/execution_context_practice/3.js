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
"Hello from the global scope!"
"Hello from the function scope!"

In the first invocation, this is bound to the global object
and message is defined as a property on the global object. In the second invocation
deliverMessage is invoked as a method call on the foo object, so this is bound to foo.