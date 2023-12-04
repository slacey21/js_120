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