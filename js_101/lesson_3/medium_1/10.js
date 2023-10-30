// Consider these two simple functions

function foo(param = "no") {
    return "yes";
}
  
function bar(param = "no") {
return param === "no" ? "yes" : "no";
}

// what will the following function invocation return?
bar(foo());

// foo() returns "yes"
// bar("yes") returns "no"
// the output is "no"