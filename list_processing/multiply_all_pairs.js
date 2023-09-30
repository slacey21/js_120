/*
Write a function that takes two array arguments, each containing
a list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays.
he returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

function multiplyAllPairs(arr1, arr2) {
  let product = [];
  arr1.forEach(arr1Num => {
    arr2.forEach(arr2Num => {
      product.push(arr1Num * arr2Num);
    });
  });

  return product.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]