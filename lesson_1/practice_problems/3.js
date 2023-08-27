// The following code differs slightly from the code in problem 2.
// What is the return value of map in this case? why?

[1, 2, 3].map(num => num * num);

/*
The return value is [1, 4, 9]. The return value is different here because the 
single line selection criterion is written without curly braces, so the 
return keyword is not needed for the callback to return the element times itself.

*/