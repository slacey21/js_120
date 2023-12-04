// Suppose that we want to extract getDescription from turk, but we always
// want it to execute with turk as its execution context. How would you modify
// your code to do that?

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon'
};

let getDescription = function() {
  return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
}.bind(turk);

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(getDescription);