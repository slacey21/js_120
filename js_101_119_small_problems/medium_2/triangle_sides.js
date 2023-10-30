/*
Write a function that takes the lengths of the three sides of a triangle
as arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

function triangle(side1, side2, side3) {
  let sides = [...arguments].sort((a, b) => a - b);
  if ((sides[0] + sides[1] <= sides[2]) || (sides[0] <= 0)) {
    return "invalid";
  } else if (sides.every(side => side === side1)) {
    return "equilateral";
  } else if ((side1 === side2)
    || (side1 === side3)
    || (side2 === side3)) {
    return "isosceles";
  } else {
    return "scalene";
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"