/*
Given the following data structure, write some code that defines an object
where the key is the first item in each subarray, and the value is the second.
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let arrObj = {};

arr.forEach(subArr => {
  arrObj[subArr[0]] = subArr[1];
});

console.log(arrObj);