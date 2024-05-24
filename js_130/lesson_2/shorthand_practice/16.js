// Explain in detail what lines 7 and 8 of this code are doing.

let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

console.log(obj2);
/*
Lines 7 and 8 are using object destructuring syntax to create copies
of the obj object. Note that these are not the same object, and are just
objects with the same own properties as the original obj object.

{...obj} is using the spread operator to perform this copying
{...obj3} uses the rest operator to take the "rest" off the properties
in obj and copy them to the new obj3 variable
*/