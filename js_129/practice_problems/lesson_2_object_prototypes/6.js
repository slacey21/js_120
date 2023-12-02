// How do you create an object that doesn't have a prototype?
// How can you determine whether an object has a prototype?

// Object with no prototype
let foo = Object.create(null);

// How to determine if an object has a prototype
console.log(Object.getPrototypeOf(foo));

