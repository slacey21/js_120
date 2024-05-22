/*
Modify the makeList function so that it returns an object that provides
the interface shown above, including add, list, and remove methods.
*/

// eslint-disable-next-line max-lines-per-function
function makeList() {
  return {
    items: [],

    list() {
      if (this.items.length === 0) {
        console.log("The list is empty");
      } else {
        this.items.forEach(item => console.log(item));
      }
    },

    add(todo) {
      let index = this.items.indexOf(todo);
      if (index === -1) {
        this.items.push(todo);
        console.log(`${todo} added!`);
      }
    },

    remove(todo) {
      let index = this.items.indexOf(todo);
      if (index !== 1) {
        this.items.splice(index, 1);
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