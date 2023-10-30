let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this arrayt to create an object where the names
// are the keys and the values are the positions in the array
// {Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5}

let flintstonesPosition = {};

flintstones.forEach((flint, index) => {
  flintstonesPosition[flint] = index;
});

console.log(flintstonesPosition);