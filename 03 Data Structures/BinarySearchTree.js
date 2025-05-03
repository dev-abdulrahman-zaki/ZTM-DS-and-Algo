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
  remove(value) {
    if (!this.root) return false;

    // Find the node and its parent
    let currentNode = this.root;
    let parentNode = null;
    let isLeftChild = false;

    // Search for the node (similar to lookup but track parent)
    while (currentNode && currentNode.value !== value) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        isLeftChild = true;
      } else {
        currentNode = currentNode.right;
        isLeftChild = false;
      }
    }

    // Node not found
    if (!currentNode) return false;

    // Handle different cases based on children
    // Case 1: No children
    if (!currentNode.left && !currentNode.right) {
      if (!parentNode) {
        // Is root
        this.root = null;
      } else {
        parentNode[isLeftChild ? "left" : "right"] = null;
      }
    }
    // Case 2: One child
    else if (!currentNode.left) {
      // Only has right child
      if (!parentNode) {
        // Is root
        this.root = currentNode.right; // Because // Only has right child
      } else {
        parentNode[isLeftChild ? "left" : "right"] = currentNode.right;
      }
    } else if (!currentNode.right) {
      // Only has left child
      if (!parentNode) {
        // Is root
        this.root = currentNode.left;
      } else {
        parentNode[isLeftChild ? "left" : "right"] = currentNode.left;
      }
    }
    // Case 3: Two children
    else {
      // Find successor (minimum in right subtree)
      // Replace currentNode's value with successor's
      // Remove the successor
    }

    return true;
  }
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
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(170));
// console.log(tree.lookup(2));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
