// What will the code below log to the console?

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
bar is assigned the value of the foo function whose context is bound to the positivity object
the logMessage property on negativity is assigned to the value of bar
Thus, the logMessage property on negativity is the foo function whose context is the positivity object,
and invoking logMessage will log "JavaScript makes sense!" to the console.
*/