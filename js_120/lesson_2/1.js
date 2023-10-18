// The code below should output "Christopher Turk is a Surgeon". Without running the code,
// what will it output? If there is a difference between the actual and desired output,
// explain the difference.

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
This will output "undefined undefined is a undefined.". Since turk.detDescription is 
passed in as an argument to the logReturnVal function, its context is stripped
and it is called bound to the global object as its contest.
*/