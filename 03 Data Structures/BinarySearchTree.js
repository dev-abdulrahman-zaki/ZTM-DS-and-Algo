class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          // Left
          // If there is no left child, add the new node here
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // If there is a left child, move to the left child and repeat the process until we find an empty spot to insert the new node
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return null; // If the tree is empty
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value > currentNode.value) {
        // right
        // not exist
        if (!currentNode.right) {
          return null;
        }
        currentNode = currentNode.right;
      } else {
        // left
        // not exist
        if (!currentNode.left) {
          return null;
        }
        currentNode = currentNode.left;
      }
    }
  }
  //   remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(9));
console.log(tree.lookup(2));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
