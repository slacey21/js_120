/*
The time of day can be represented as the number of minutes before or after
midnight. If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns
the time of day in 24 hour format (hh:mm). Your function should work with any
integer input.
*/

function timeOfDay(time) {
  const DAY_AS_MINUTES = 24 * 60;
  let timeRem = Math.abs(time) % DAY_AS_MINUTES;
  let hours = 0;
  let minutes = 0;

  if (time >= 0) {
    hours = String(Math.floor(timeRem / 60));
    minutes = String(Math.round(timeRem % 60));
  } else {
    hours = String(23 - Math.floor(timeRem / 60));
    minutes = String(Math.round(60 - (timeRem % 60)));
  }
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, 0)}`;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");