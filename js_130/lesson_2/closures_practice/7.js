/*
Without running the following code, determine what value it logs on the
last line. Explain how the program arrived at that final result.
*/

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

/*
This code will log 150. bar is a function returned by foo whose prod value is
initialized to 2. Every time bar is invoked, it access and returns that same
prod variable, since prod is part of bar's closure.
*/
