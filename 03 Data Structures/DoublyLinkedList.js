class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.prev = this.tail;
    this.tail.next = newNode; // Connect current last node to new last node
    this.tail = newNode; // Update tail reference to point to new last node
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const targetNode1 = this.lookup(index - 1);
    const targetNode2 = targetNode1.next;
    newNode.next = targetNode2;
    newNode.prev = targetNode1;
    targetNode1.next = newNode;
    targetNode2.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    const targetNode = this.lookup(index - 1);
    targetNode.next = targetNode.next.next;
    this.length--;
    return this.printList();
  }

  // reverse()
}

const myLinkedList = new DoublyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
console.log(myLinkedList.printList());
// myLinkedList.insert(3, 4);
// myLinkedList.remove(1);
// console.log(myLinkedList.printList());
// console.log(myLinkedList);
