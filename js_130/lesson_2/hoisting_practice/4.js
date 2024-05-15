var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

/*
Without running the code, determine what it logs to the console

NaN - hoisting makes it operate like this:

function foo() {
  var bar; // bar - undefined
  bar = bar - 42; // undefined - 42 = NaN
  console.log(bar); // NaN
}
var bar;
bar = 82;

foo(); since we re-declare bar in the function body, overrides global bar

*/