/*
The method franchise.allMovies is supposed to return the following array:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

Explain why this method will not return the desired object. Try fixing
this problem by taking advantage of JavaScript lexical scoping rules.

*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

/*
ANSWER:
This will not return the desired object because this loses execution
context when it is used in an anonymous function. So, this.name is called
with this being bound to the global object.
*/