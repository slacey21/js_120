/*
Write a function that takes a non-empty string argument and returns the 
middle character(s) of the string. If the string has an odd length, you 
should return exactly one character. If the string has an even length, 
you should return exactly two characters.
*/

function centerOf(word) {

    if (word.length % 2 === 0) {
        let centerIndex = word.length / 2;
        return word.slice(centerIndex - 1, centerIndex + 1);
    } else {
        let centerIndex = (word.length - 1) / 2;
        return word[centerIndex];
    }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"