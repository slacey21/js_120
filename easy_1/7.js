/*
Write a function that takes two strings as arguments, determines 
the length of the two strings, and then returns the result of concatenating 
the shorter string, the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.
*/

function shortLongShort(firstStr, secondStr) {
    if (firstStr.length > secondStr.length) {
        return secondStr + firstStr + secondStr;
    } else {
        return firstStr + secondStr + firstStr;
    }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"