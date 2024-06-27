/* eslint-disable id-length */
class Element {
  constructor(value, nextItem = null) {
    this.value = value;
    this.nextElement = nextItem;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElement;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.nodes = [];
  }

  size() {
    return this.nodes.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(value) {
    let node;

    if (this.size() === 0) {
      node = new Element(value);
    } else {
      node = new Element(value, this.head());
    }

    this.nodes.push(node);
  }

  pop() {
    return this.nodes.pop().datum();
  }

  peek() {
    return (this.size() > 0) ? this.nodes[this.size() - 1].datum() : null;
  }

  head() {
    return (this.size() > 0) ? this.nodes[this.size() - 1] : null;
  }

  toArray() {
    let arr = [];

    for (let i = this.size() - 1; i >= 0; i -= 1) {
      arr.push(this.nodes.pop().datum());
    }

    return arr;
  }

  reverse() {
    let reversedList = new SimpleLinkedList();

    for (let i = this.size() - 1; i >= 0; i -= 1) {
      reversedList.push(this.nodes[i].datum());
    }

    return reversedList;
  }

  static fromArray(arr) {
    let list = new SimpleLinkedList();

    if (Array.isArray(arr)) {
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        list.push(arr[i]);
      }
    }

    return list;
  }

}


module.exports = { SimpleLinkedList, Element };