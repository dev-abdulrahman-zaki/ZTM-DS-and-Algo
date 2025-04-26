class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    // console.log("step 0:", this);
    this.tail.next = newNode; // Connect current last node to new last node
    // console.log("step 1:", this);
    this.tail = newNode; // Update tail reference to point to new last node
    // console.log("step 2:", this);
    this.length++;
    // console.log(this);
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  lookup(index) {
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index === this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const targetNode = this.lookup(index - 1);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {}

  // get(index)
  // reverse()
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
// console.log(myLinkedList.printList());
myLinkedList.insert(3, 4);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
