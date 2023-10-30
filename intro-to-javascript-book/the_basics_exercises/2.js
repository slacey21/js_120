let num = 5390;
let ones = num % 10;
let tens = ((num - ones) % 100) / 10;
let hundreds = ((num - tens * 10 - ones) % 1000) / 100;
let thousands = ((num - hundreds * 100 - tens * 10 - ones) % 10000) / 1000;

console.log(`We are given a number: ${num}.
The digit in the ones place is ${ones}.
The digit in the tens place is ${tens}.
The digit in the hundreds place is ${hundreds}.
The digit in the thousands place is ${thousands}.`);