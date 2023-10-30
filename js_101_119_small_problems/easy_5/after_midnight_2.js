/*
Write two functions that each take a time of day in 24 hour format,
and return the number of minutes before and after midnight, respectively.
Both functions should return a value in the range 0..1439.
*/
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(time) {
  let [hours, minutes] = time.split(":").map(num => parseInt(num, 10));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(time) {
  let timeDelta = MINUTES_PER_DAY - afterMidnight(time);
  return timeDelta === MINUTES_PER_DAY ? 0 : timeDelta;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);