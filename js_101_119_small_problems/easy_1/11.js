/*
Write a function that determines and returns the UTF-16 string value of a 
string passed in as an argument. The UTF-16 string value is the sum of the 
UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() 
to determine the UTF-16 value of a character.)
*/

function utf16Value(str) {
    let utfTotal = 0;
    for (let i = 0; i < str.length; i++) {
        utfTotal += str.charCodeAt(i);
    }
    return utfTotal;
}

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
