let counter = 0;

function makeCounter() {
  return function() {
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
2
3
4

each time the function returned by makeCounter is invoked, it is updating
the global counter variable. Each time makeCounter is invoked, the "counter"
accessed and updated by the functino it returns is a pointer to the same
counter variable
*/

