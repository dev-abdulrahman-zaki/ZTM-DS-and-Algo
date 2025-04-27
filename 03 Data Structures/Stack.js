class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top?.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    const currentTop = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return currentTop.value;
    }
    this.top = this.top.next;
    this.length--;
    // return this;
    return currentTop.value;
  }
  isEmpty() {
    return this.length === 0;
  }
}

class StackUsingArray {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
    return this;
  }
  pop() {
    return this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

// const myStack = new Stack();
// console.log(myStack.push("google"));
// console.log(myStack.push("google2"));
// console.log(myStack.push("google3"));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

const myStack = new StackUsingArray();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.push("google3"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
