// Write three different ways to remove all of the elements from the following array:


// method 1
let numbers = [1, 2, 3, 4];
let len = numbers.length
for (i = 0; i < len; i++){
    numbers.pop();
}

console.log(numbers);

// method 2
numbers = [1, 2, 3, 4];
len = numbers.length;
for (i = 0; i < len; i++){
    numbers.shift();
}

console.log(numbers);

// method 1
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);