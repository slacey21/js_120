/*
Write a function that takes a string, doubles every consonant character
in the string, and returns the result as a new string. The function should
not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(text) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
                    'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let textArr = text.split("");
  let consonantsDoubled = textArr.map(char => {
    if (CONSONANTS.includes(char.toLowerCase()) || CONSONANTS.includes(char)) {
      return char + char;
    } else {
      return char;
    }
  });
  return consonantsDoubled.join("");
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
