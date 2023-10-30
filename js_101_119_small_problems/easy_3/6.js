/*
Madlibs is a simple game where you create a story template with "blanks" 
for words. You, or another player, then construct a list of words and place 
them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, 
and an adjective, and injects them into a story that you create.
*/

let readline = require('readline-sync');

console.log('Enter a noun: ');
let noun = readline.prompt();

console.log('Enter a verb: ');
let verb = readline.prompt();

console.log('Enter an adjective: ');
let adjective = readline.prompt();

console.log('Enter an adverb: ');
let adverb = readline.prompt();

let madlib = `Today I saw a ${adjective} ${noun} ${adverb} ${verb} a scrappy dog a bone`;
console.log(madlib);


