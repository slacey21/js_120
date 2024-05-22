/*
Why does this code produce an error? Correct the problem by using an IIFE.

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?
*/

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);


/*
The code produces an error because the sum variable gets overwritten with the
function named sum.
*/
