/*
We now want to track which books we have and haven't read. Update the factory
function so that it returns a book object that includes a property read that
has an initial value of false.
*/

function createBook(title, author) {
  return {
    title,
    author,
    read: false,

    getDescription() {
      return `${this.title} was written by ${this.author}.`;
    }
  };
}


let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => false
