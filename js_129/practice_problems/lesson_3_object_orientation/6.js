// eslint-disable-next-line max-lines-per-function
function createProduct(name, id, stock, price) {
  return {
    name,
    id,
    stock,
    price,

    describe() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  
    setPrice(newPrice) {
      if (newPrice < 0) {
        alert('Invalid price!');
      } else {
        this.price = newPrice;
      }
    }
  };
}

let scissors = createProduct('Scissors', 0, 10, 8);
let drill = createProduct('Rock', 1, 100, 80);
let spatula = createProduct('Spatula', 2, 25, 3);
let hammer = createProduct('Hammer', 3, 100000, 81);

scissors.describe();
drill.describe();
spatula.describe();
hammer.describe();
