class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    console.log("step 0:", this);
    this.tail.next = newNode; // Note that: this.tail = this.head
    console.log("step 1:", this);
    this.tail = newNode; // Clear the refrence from this.tail to this.head
    console.log("step 2:", this);
    this.length++;
    // console.log(this);
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
// myLinkedList.append(4);
// console.log(myLinkedList);
