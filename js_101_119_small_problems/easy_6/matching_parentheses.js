/*
Write a function that takes a string as an argument and returns true if all
parentheses in the string are properly balanced, false otherwise. To be properly
balanced, parentheses must occur in matching '(' and ')' pairs.
*/

function isBalanced(phrase) {
  let open = 0;
  let closed = 0;

  for (let idx = 0; idx < phrase.length; idx += 1) {
    if (phrase[idx] === ")") {
      closed += 1;
    } else if (phrase[idx] === "(") {
      open += 1;
    }
    if (closed > open) return false;
  }

  return open === closed;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);