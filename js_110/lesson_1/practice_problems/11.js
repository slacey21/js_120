// Create an object that expresses the frequency with which each 
// letter occurs in this string

let statement = "The Flintstones Rock";
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let statementArr = statement.split('').filter(char => char !== ' ');
let statementObj = {};

statementArr.forEach(letter => {
  statementObj[letter] = statementArr.filter(char => char === letter).length;
});

console.log(statementObj);