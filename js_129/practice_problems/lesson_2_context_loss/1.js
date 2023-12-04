// Without running the code, what will it output?

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/*
ANSWER:
This will log "undefined undefined is a undefined."
When the turk.getDescription method is passed into logReturnVal as an
argument, it loses its execution context, thus, it is invoked with the
global object as its execution context.
*/