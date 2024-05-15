/*
The following code doesn't work. Without changing the order of the invocation
and function definition, update this code so that it works


bar();

var bar = function() {
  console.log("foo!");
};
*/

bar();

function bar() {
  console.log("foo!");
}