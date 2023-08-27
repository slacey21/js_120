// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*

[undefined, bear]

In the first iteration, the callback will return undefined since 'ant'
is not greater than 3 characters in length. 'bear' will be added to the
return value array in the next iteration because it is 4 characters
long.

*/