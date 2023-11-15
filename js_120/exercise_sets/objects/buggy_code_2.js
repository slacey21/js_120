/*
A grocery store uses a JavaScript function to calculate discounts on
various items. They are testing out various percentage discounts but
are getting unexpected results. Go over the code, and identify the
reason why they aren't getting the expected discounted prices from
the function. Then, modify the code so that it produces the correct
results.
*/

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let newPrice = this.price - discount;
    return newPrice;
  },
};

/*
ANSWER:
The discount function is permanently changing the value stored in
the price property, thus, after the first invocation of discount,
the values will not be as expected.
*/

console.log(item.discount(20)); // should return 40
// 40
console.log(item.discount(50)); // should return 25
// 20
console.log(item.discount(25)); // should return 37.5
// 15