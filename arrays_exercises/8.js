/*

8. Write a function similar to the oddLengths function from Exercise 6, 
but don't use map or filter. Instead, try to use the reduce method.

*/


function oddLengths(arr) {
    let oddVals = arr.reduce((odds, word) => {
        if (word.length % 2 === 1) {
            odds.push(word.length);
        }
        return odds;
    }, []);
    return oddVals;
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]