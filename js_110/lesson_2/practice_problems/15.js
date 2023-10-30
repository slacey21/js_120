/*
Given the following data structure, write some code to return an
array which contains only the objects where all the numbers are even.
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let isEven = value => value % 2 === 0;

let allEvens = arr.filter(obj => {
  let allElements = [];
  Object.values(obj).forEach(subArr => {
    subArr.forEach(element => allElements.push(element));
  });

  return allElements.every(isEven);
});

console.log(allEvens);