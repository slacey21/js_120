/*
Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.
*/

function repeater(text) {
  let textArr = text.split("");
  let textDoubled = textArr.map(char => char + char);
  return textDoubled.join("");
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""