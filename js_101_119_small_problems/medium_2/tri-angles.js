/*
Write a function that takes the three angles of a triangle as arguments
and returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to
worry about floating point errors. You may also assume that the arguments
are in degrees.
*/

function triangle(angle1, angle2, angle3) {
  let angles = [...arguments].sort((a, b) => a - b);
  let angleTotal = angles.reduce((total, angle) => total += angle, 0);

  if ((angleTotal !== 180) || (angles.includes(0))) {
    return "invalid";
  } else if (angles.includes(90)) {
    return "right";
  } else if (angles[2] > 90) {
    return "obtuse";
  } else {
    return "acute";
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"