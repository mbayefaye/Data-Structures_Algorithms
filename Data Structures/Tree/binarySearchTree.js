/*every parent node has at most 2 children
every node to the left of a parent node is always less than parent
every node to the right of a parent node is always greater than parent
*/
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
    //create a newNode
    let newNode = new Node(value);
    //check if root exist
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    let current = this.root;
    let notFound = "not found in the tree";
    let found = false;
    //check if root exist
    if (this.root === null) return false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return notFound;
    return current;
  }
  //breadth First Search
  bfs() {
    var node = this.root;
    //initialize an empty datta and queue
    var data = [];
    var queue = [];
    //we push the root into the queue
    queue.push(node);
    //while queue >0
    while (queue.length) {
      //take the first element
      node = queue.shift();
      //push the element value into the data
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //depth first search pre order
  DFSPreorder() {
    var data = [];
    var current = this.root;
    function tranverse(node) {
      data.push(node.value);
      if (node.left) tranverse(node.left);
      if (node.right) tranverse(node.right);
    }
    tranverse(current);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  maxValue() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  minValue() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}

const tree = new BinarySearchTree();
tree.insert("MBAYE");
tree.insert("MAYE");
tree.insert("ADA");
tree.insert("");
tree.insert(8);
tree.insert(20);
console.log("Maximum value of the tree ---> ", tree.maxValue());
console.log("Minimum value of the tree ---> ", tree.minValue());
console.log("PreOrder ---> ", tree.DFSPreorder());
console.log("PreOrder ---> ", tree.DFSPostOrder());
console.log("InOrder ---> ", tree.DFSInOrder());
console.log("bfs ---> ", tree.bfs());
