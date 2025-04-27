class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first?.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    const currentFirst = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return currentFirst.value;
    }
    this.first = currentFirst.next;
    this.length--;
    return currentFirst.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("A"));
console.log(myQueue.enqueue("B"));
console.log(myQueue.enqueue("C"));
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
