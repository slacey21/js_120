// In what sequence does the JavaScript runtime run the functions q(), d(),
// n(), z(), s(), f(), and g() in the following code?

setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();


/*
g() g still comes before f because even though no time is specified for f, delays may be longer than specified
f()
d()
z()
n()
s()
q()
*/
