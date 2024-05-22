/*
Write a makeList function that creates and returns a new function that
implements a todo list. The returned function should have the following
behavior:

When called with an argument that is not already on the list, it adds that
argument to the list.
When called with an argument that is already on the list, it removes the
element from the list.
When called without arguments, it prints all of the items on the list. If
the list is empty, it prints an appropriate message.
*/

function makeList() {
  let todos = [];

  return function(newTodo) {
    if (newTodo) {
      if (todos.includes(newTodo)) {
        todos.splice(todos.findIndex(todo => todo === newTodo), 1);
        console.log(`${newTodo} removed!`);
      } else {
        todos.push(newTodo);
        console.log(`${newTodo} added!`);
      }
    } else if (todos.length === 0) {
      console.log("The list is empty.");
    } else {
      todos.forEach(todo => console.log(todo));
    }
  };
}


let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book