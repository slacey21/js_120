/*
Write a function that takes a sentence string as an argument and
returns that string with every occurrence of a "number word" —
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
'eight', 'nine' — converted to its corresponding digit character.
*/

const NUMBERS_AS_WORDS = ["zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine"];

function wordToDigit(phrase) {
  let toWords = phrase.split(" ").map(word => {
    if (Number(word) < 10) {
      return NUMBERS_AS_WORDS[Number(word)];
    } else {
      return word;
    }
  });

  return toWords.join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."