function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

/*
What do the 4 console.log statements at the end of this program print?
1
1
1
1

Each time a variable gets assigned (or reassigned) the value of the
function returned by makeCounter, it has access to a copy of the counter
variable due to the closer of the function.

*/