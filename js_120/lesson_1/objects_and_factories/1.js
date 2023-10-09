/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description
*/

/*

Create three objects that represent the three books shown above. The method
for the "Get Description" behavior should return a string like the following:

"Me Talk Pretty One Day was written by David Sedaris."
*/

let book1 = {
  title: "Mythos",
  author: "Steven Fry",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}.`);
  },
};

let book2 = {
  title: "Me Talk Pretty One Dar",
  author: "David Sedaris",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}.`);
  },
}

let book3 = {
  title: "Aunts aren;t Gentlemen",
  author: "PG Wodehouse",

  getDescription() {
    console.log(`${this.title} was written by ${this.author}.`);
  },
}

