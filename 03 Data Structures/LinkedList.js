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
    console.log("step 0:", this);
    this.tail.next = newNode; // Connect current last node to new last node
    console.log("step 1:", this);
    this.tail = newNode; // Update tail reference to point to new last node
    console.log("step 2:", this);
    this.length++;
    // console.log(this);
    return this;
  }

  prepend(value) {}

  printList() {}

  // insert(index, value)
  // remove(index)
  // get(index)
  // reverse()
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
// myLinkedList.append(4);
// console.log(myLinkedList);
