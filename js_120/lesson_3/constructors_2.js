// What happens if you run the following code? Why?

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?

/*
ANSWER:
This will throw an error. The Lizard() function is invoked without the new keyword,
so lizzy will be assigned the value undefined. undefined does not have a scamper property.
*/
