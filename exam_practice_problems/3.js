// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
ALGORITHM
1. split string by " " to get an array of words
2. iterate over array of words
3. In each iteration, if the word is 4 characters or longer, change
each 4th character to the uppercase version of the current character
4. Join the array elements with a " " and save as a string
5. return string
*/

function toWeirdCase(str) {
  let strArr = str.split(" ");

  let weirdStrArr = strArr.map((word, iter) => {
    if (word.length >= 4 && iter % 2 === 1) {
      let chars = word.split("");
      for (let idx = 3; idx < chars.length; idx += 4) {
        chars[idx] = chars[idx].toUpperCase();
      }
      return chars.join("");
    } else {
      return word;
    }
  });

  return weirdStrArr.join(" ");
}


// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".