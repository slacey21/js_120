/*

7. Use reduce to compute the sum of the squares of all of the numbers in an array:

*/

function sumOfSquares(arr) {
    return arr.reduce((total, val) => total + val ** 2, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83