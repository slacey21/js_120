function makeCounter() {
  let counter = 0;

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
What do the 4 console.log statements at the end of this program print
1
2
1
2

Each time makeCounter() is invoked and its return value is assigned to
a variable, the "counter" variable that that funciton has access to
is reset to 0. Then each time that function is invoked, it increments
the same "counter" variable

*/