// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/*
ALGORITHM:
1. Split input string into an array
2. Initialize empty object to store character-count key-value pairs
3. iterate over array:
  a. if character already in object, increment value by 1
  b. if character not in object, add to object with value 1
4. Store object values in new array and sort in ascending order
5. Find all characters in object whose value is lowest
6. If only one character, return that character
  a. else if multiple, iterate over array until first matching character hits and return
*/


function leastCommonChar(str) {
  let strArr = str.split("");
  let charCounts = {};
  strArr.forEach(char => {
    if (Object.keys(charCounts).includes(char.toLowerCase())) {
      charCounts[char.toLowerCase()] += 1;
    } else {
      charCounts[char.toLowerCase()] = 1;
    }
  });

  let leastCommonCount = Object.values(charCounts).sort((a, b) => a - b)[0];
  let leastCommonChars = Object.keys(charCounts)
    .filter(key => charCounts[key] === leastCommonCount);

  let leastCommonChar;
  while(true) {
    for (let idx = 0; idx < strArr.length; idx += 1) {
      if (leastCommonChars.includes(strArr[idx].toLowerCase())){
        leastCommonChar = strArr[idx].toLowerCase();
        break;
      }
    }
    break;
  }
  return leastCommonChar;

}

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".