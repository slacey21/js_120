// Suppose we want to use code to keep track of products in our hardware
// store's inventory. A first stab might look something like this:

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// This code presents a number of problems, however. What if we want to add
// another kind of drill? Given what we've learned about object orientation in
// the previous assignment, how could we use objects to organize these two
// groups of data?

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      console.log(`=> id: ${this.id}`);
      console.log(`=> name: ${this.name}`);
      console.log(`=> stock: ${this.stock}`);
      console.log(`=> price: ${this.price}`);
    },
    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log("The new price for this item is invalid.");
      } else {
        this.price = newPrice;
      }
    }
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

scissors.describe();
drill.describe();

drill.setPrice(50);
drill.describe();



