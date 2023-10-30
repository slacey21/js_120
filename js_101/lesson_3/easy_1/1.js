// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

/*
ANSWER: No. JavaScript allows for the addition of elements not in the 
next unused element. This will treat the elements at indexes 3, 4, and 5 as empty
*/

// BONUS: 
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// ANSWER: This will return undefined