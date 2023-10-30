function selectFruit(produceObj) {
  let produceKeys = Object.keys(produceObj);
  let fruitObj = {};

  for (let i = 0; i < produceKeys.length; i += 1) {
    if (produceObj[produceKeys[i]] === 'Fruit') {
      fruitObj[produceKeys[i]] = 'Fruit';
    }
  }

  return fruitObj;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce));