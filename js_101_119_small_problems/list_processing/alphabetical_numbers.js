/*
Write a function that takes an array of integers between 0 and 19 and
returns an array of those integers sorted based on the English word for each
number:
*/


const ALPHABETIC_ORDER = [8, 18, 11, 15, 5, 4, 14, 9, 19, 1,
  7, 17, 6, 16, 10, 13, 3, 12, 2, 0];


function alphabeticNumberSort(arr) {
  let arrSorted = arr.map(element => element);
  return arrSorted.sort((a, b) => ALPHABETIC_ORDER.indexOf(a) - ALPHABETIC_ORDER.indexOf(b));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]