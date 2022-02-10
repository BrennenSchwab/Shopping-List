const items = require("./fakeDb")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static allItems(){
    return items
  }

  static update(name, data) {
    let foundItem = Item.find(name);
    if (foundItem === undefined) {
      throw {message: "Not Found", status: 404}
    }
    foundItem.name = data.name;
    foundItem.price = data.price;

    return foundItem;
  }

  static find(name) {
    const findItem = items.find(val => val.name === name);
    if(findItem === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return findItem
  }

  static remove(name) {
    let itemIndex = items.findIndex(val => val.name === name);
    if (itemIndex === -1) {
      throw {message: "Not Found", status: 404}
    }
    items.splice(itemIndex, 1);
  }
}

module.exports = Item;
