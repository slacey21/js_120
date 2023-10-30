/*
Write a function that takes a year as input and returns the century. The
return value should be a string that begins with the century number, and
ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
*/

function century(date) {
  let dateCentury = Math.floor((date - 1) / 100) + 1;
  let dateOnesDigit = dateCentury % 10;

  if ((dateOnesDigit === 1) && !(String(dateCentury).slice(-2) === "11")) {
    return `${dateCentury}st`;
  } else if ((dateOnesDigit === 2) && !(String(dateCentury).slice(-2) === "12")) {
    return `${dateCentury}nd`;
  } else if ((dateOnesDigit === 3) && !(String(dateCentury).slice(-2) === "13")) {
    return `${dateCentury}rd`;
  } else {
    return `${dateCentury}th`;
  }
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

