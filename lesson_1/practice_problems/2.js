// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/*
As with filter, map looks at the return value of the callback function.
Here, the callback function returns no value, so the return value of calling
map will be [undefined, undefined, undefined].

*/