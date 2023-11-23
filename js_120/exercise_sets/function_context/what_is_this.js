// What do you think is logged? Try to answer the question before you run
// the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
ANSWER:
This logs NaN. Anywhere outside a function, this is bound to the global object.
So, this.firstName returns undefined and this.lastName returns undefined, and
undefined + undefined returns NaN.
*/