// Is the named function inside in this IIFE accessible in the global scope?


(function foo() {
  console.log('Bar');
})();

foo() // ?

/*
No, the function is invoked immediately as an expression and is not stored
as a globally accessible variable
*/