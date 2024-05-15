var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

/*
Without running this code, what will it display?

ANSWER:
This will log "Bye" to the console. The foo function declaration on line 5
is hoisted and the foo function expression declaration using var on line 1
is discarded and treated as a reassignment. Thus, by the time the foo() invocation
on line 9 is executed, foo will refer to the function expression and not the 
function declaration.

*/