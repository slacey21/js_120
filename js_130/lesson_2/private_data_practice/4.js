/*
Update the implementation from problem 1 so that it retains the use
of an object with methods but prevents outside access to the items
the object stores internally.
*/


// eslint-disable-next-line max-lines-per-function
function makeList() {
  let items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log("The list is empty");
      } else {
        items.forEach(item => console.log(item));
      }
    },

    add(todo) {
      let index = items.indexOf(todo);
      if (index === -1) {
        items.push(todo);
        console.log(`${todo} added!`);
      }
    },

    remove(todo) {
      let index = items.indexOf(todo);
      if (index !== 1) {
        items.splice(index, 1);
        console.log(`${todo} removed!`);
      }
    }
  };
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn