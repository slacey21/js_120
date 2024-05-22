// refactor the solution to problem 4 using recursion.

(function printDescendingNumbers(repeatTimes) {
  if (repeatTimes < 0) {
    return;
  }
  console.log(repeatTimes);
  printDescendingNumbers(repeatTimes - 1);
})(7);