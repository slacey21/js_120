/*
The Array.prototype.reverse method reverses the order of elements in an array,
and Array.prototype.sort can rearrange the elements in a variety of ways,
including descending. Both of these methods mutate the original array as shown
below. Write two distinct ways of reversing the array without mutating the
original array. Use reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];

// method 1
console.log(numbers.slice(0).reverse());
console.log(numbers);

// method 2
console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(numbers);

// Bonus Question: Can you do it using the Array.prototype.forEach() method?
let reversedNumbers = [];
numbers.forEach((num) => {
  reversedNumbers.unshift(num);
});
console.log(reversedNumbers);
console.log(numbers);

