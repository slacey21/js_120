// Write a function that takes a string argument and returns a new string
// that contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.


function crunch(str) {
    let crunched = '';
    let idx = 0;

    while (idx <= str.length - 1) {
        if (str[idx] !== str[idx + 1]) {
            crunched += str[idx];
        }
        idx += 1;

    }

    return crunched;

}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
