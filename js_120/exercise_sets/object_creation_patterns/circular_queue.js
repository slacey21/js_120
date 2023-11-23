/*
Your task is to write a CircularQueue class that implements a circular
queue for arbitrary objects. The class should obtain the buffer size with
an argument provided to the constructor, and should provide the following
methods:

enqueue to add an object to the queue
dequeue to remove (and return) the oldest object in the queue. It should
return null if the queue is empty.
You may assume that none of the values stored in the queue are null
(however, null may be used to designate empty spots in the buffer).
*/


class CircularQueue {
  constructor(bufferSize) {
    this.queue = Array(bufferSize).fill(null);
  }

  // eslint-disable-next-line max-lines-per-function, max-statements
  dequeue() {
    if (this.queue.filter(val => val).length === 0) return null;

    let elementToReturn;

    if (this.queue[this.queue.length - 1]) {
      elementToReturn = this.queue.pop();
      this.queue = [null].concat(this.queue);
      return elementToReturn;
    } else {
      let elementIndexToReturn;

      for (let index = this.queue.length - 1; index >= 0; index -= 1) {
        if (this.queue[index]) {
          elementIndexToReturn = index;
          break;
        }
      }

      elementToReturn = this.queue[elementIndexToReturn];
      let firstPart = this.queue.slice(0, elementIndexToReturn);
      let secondPart = this.queue.slice(elementIndexToReturn + 1);
      this.queue = firstPart.concat(secondPart, null);
      return elementToReturn;
    }
  }

  enqueue(val) {
    if (this.queue[this.queue.length - 1]) {
      this.dequeue();
      this.queue[0] = val;
    } else {
      this.queue = [val].concat(this.queue.slice(0, this.queue.length - 1));
    }
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);