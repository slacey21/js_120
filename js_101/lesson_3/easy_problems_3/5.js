/*
The following function unnecessarily uses two return statements to 
return boolean values. Can you rewrite this function so it only 
has one return statement and does not explicitly use either true or false?
*/

// function isColorValid(color) {
//     if (color === "blue" || color === "green") {
//       return true;
//     } else {
//       return false;
//     }
//   }

// solution one
function isColorValid1(color) {
    return (color === "blue" || color === "green");
}

function isColorValid2(color) {
    return (color === "blue" || color === "green") ? true : false;
}

console.log(isColorValid1('red'));
console.log(isColorValid1('blue'));
console.log(isColorValid1('green'));
console.log(isColorValid2('red'));
console.log(isColorValid2('blue'));
console.log(isColorValid2('green'));