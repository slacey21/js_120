// What is the callback's return value in the following code?
// Also, what is the return value of 'every' in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
})

/*
The callback's return value is 2, 4, 6 because assignment
returns the value to the right of the assignment operator.

The return value of 'every' is true, because the callback 
returns a truthy value every iteration.


*/