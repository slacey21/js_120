// What will the following code log to the console?

let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();

/*
ANSWER:
This will log "JavaScript makes sense!".
negativity.logMessage is a method on the negativity object that logs
this.message. However, since bar (the object assigned to negativity.logMessage)
is a copy of the foo function with its execution contet permanently bound to 
the positivity object, this.message will always point to positivity.message;
*/
