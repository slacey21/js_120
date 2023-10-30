/*

6. Use map and filter to first determine the lengths of all 
the elements in an array of string values, then discard the 
even values (keep the odd values).

*/

function oddLengths(arr) {
    // find the length of all values in arr
    let length = arr.map(val => val.length);
    let odds = length.filter(len => len % 2 === 1);
    return odds;

}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]