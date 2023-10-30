// Write a function that takes no arguments and returns a string that contains
// a UUID.

function generateUUID() {
  let UUIDString = "";
  for (let count = 0; count < 36; count += 1) {
    if ([8, 13, 18, 23].includes(count)) {
      UUIDString += "-";
    } else {
      UUIDString += numberToHex(Math.floor(Math.random() * 16));
    }
  }
  return UUIDString;

}

function numberToHex(num) {
  return num.toString(16);
}

console.log(generateUUID());





