// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

/*
The return value of the filter method call is [1, 2, 3]. Filter looks 
at the return value of the callback function and adds the corresponding
element to the returned array if the callback's return value is truthy.
Here, for every iteration, the callback's return value is 'hi' which is truthy,
so the original array will be returned, with no values filtered out.


*/