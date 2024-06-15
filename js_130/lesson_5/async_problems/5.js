// Write a function named afterNSeconds that takes two arguments: a callback
// and a time duration in seconds. It should wait for the indicated period,
// then invoke the callback function.

function afterNSeconds(callbackFn, waitTime) {
  setTimeout(callbackFn, waitTime * 1000);
}