/*
Write a function named makeMultipleLister that you can call with a
number as an argument. The function should return a new function that,
when invoked, logs every positive integer multiple of that number less
than 100. It should work like this:
*/

function makeMultipleLister(multiplier) {
  return function() {
    for (let index = multiplier; index < 100; index += multiplier) {
      console.log(index);
    }
  };
}


let lister = makeMultipleLister(17);
lister();