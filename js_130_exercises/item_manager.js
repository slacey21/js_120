/*
Here's all the required information for an item:

SKU code: This is the unique identifier for a product. It consists of the
first 3 letters of the item and the first 2 letters of the category. If the
item name consists of two words and the first word consists of two letters
only, the next letter is taken from the next word.

Item name: This is the name of the item. It must consist of a minimum of 5
characters. Spaces are not counted as characters.

Category: This is the category that the item belongs to. It must consist of
a minimum of 5 characters and be only one word.

Quantity: This is the quantity in stock of an item. This must not be blank.
You may assume that a valid number will be provided.

The following are the methods that the items manager can perform:

create: This method creates a new item. Returns false if creation is not
successful.

update: This method accepts an SKU Code and an object as an argument and
updates any of the information on an item. You may assume valid values
will be provided.

delete: This method accepts an SKU Code and deletes the item from the list.
You may assume a valid SKU code is provided.

items: This property contains a list of all the items.

inStock: This method list all the items that have a quantity greater than 0.

itemsInCategory: This method list all the items for a given category

The following are the methods on the reports managers:

init: This method accepts the ItemManager object as an argument and assigns
it to the items property.

createReporter: This method accepts an SKU code as an argument and returns an
object.
  The returned object has one method, itemInfo. It logs to the console all the
  properties of an object as "key:value" pairs (one pair per line). There are
  no other properties or methods on the returned object (except for
  properties/methods inherited from Object.prototype).

reportInStock: Logs to the console the item names of all the items that are in
stock as a comma separated values.
*/

let itemCreator = (function() {
  function isValidItem(itemArgs) {
    if (
      !itemArgs ||
      itemArgs.length < 3 ||
      itemArgs[0].replace(" ", "").length < 5 ||
      itemArgs[1].includes(" ") ||
      itemArgs[1].length < 5
    ) {
      return false;
    }
    return true;
  }

  function generateSkuCode(itemArgs) {
    return itemArgs[0].replace(" ", "").slice(0, 3).toUpperCase()
    + itemArgs[1].slice(0, 2).toUpperCase();
  }

  return function (itemArgs) {
    if (isValidItem(itemArgs)) {
      this.skuCode = generateSkuCode(itemArgs);
      this.itemName =  itemArgs[0];
      this.category = itemArgs[1];
      this.quantity = itemArgs[2];
    } else {
      return { notValid: true};
    }
  };
})();


let ItemManager = {
  items: [],

  create(...itemArgs) {
    let item = new itemCreator(itemArgs);
    if (!item.hasOwnProperty("notValid")) {
      this.items.push(item);
    } else {
      return false;
    }
  },

  update(SKU, itemObj) {
    this.items.forEach(item => {
      if (item["skuCode"] === SKU) {
        for (let prop in itemObj) {
          item[prop] = itemObj[prop];
        }
      }
    });
  },

  delete(SKU) {
    this.items = this.items.filter(item => {
      return item["skuCode"] !== SKU;
    });
  },

  inStock() {
    return this.items.filter(item => {
      return item["quantity"] > 0;
    });
  },

  itemsInCategory(category) {
    return this.items.filter(item => item["category"] === category);
  }

};

let ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item["itemName"]).join());
  },

  createReporter(SKU) {
    let itemsMatchingSKU = this.items.items.filter(item => {
      return item["skuCode"] === SKU;
    });

    return {
      itemInfo() {
        itemsMatchingSKU.forEach(item => {
          Object.keys(item).forEach(key => {
            console.log(`${key}: ${item[key]}`);
          });
        });
      }
    };
  }
};


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);

// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });

// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());

// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');

// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10