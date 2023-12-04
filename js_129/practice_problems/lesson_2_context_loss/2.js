let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, thisArg) {
  let returnVal = func.call(thisArg);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);