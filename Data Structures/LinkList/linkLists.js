class Node {
  constructor(val) {
    this.val = val;
    //reference to the next node-next
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    //create a new node using val
    let newNode = new Node(val);
    //if there is no head set the head and tail to be the newly created one
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //otherwise set the next property on list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //if there are nodes in the list ,return undefined
    if (!this.head) return undefined;
    //loop through the list until you reach the tail
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    //set the next prpoerty of the 2nd to last node to be null
    this.tail = newTail;
    //set tail to be the 2nd to last node
    this.tail.next = null;
    //decrement the length of the list by 1
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //return the value of the node
    return current;
  }

  shift() {
    //if there are no nodes ,return udefined
    if (!this.head) return undefined;
    //store the current head property in a variable
    let currentHead = this.head;
    //set the head property to be the current head's next property
    this.head = currentHead.next;
    //decrement by 1
    this.length--;
    //check if it's null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //return the value of the node remmoved
    return currentHead;
  }
  unshift(val) {
    //create a new node
    let newNode = new Node(val);
    //if there is no head,set head and tail to be newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //otherwise set the newly created node's next property to be the current
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(position) {
    //if the index is less than zero return null
    if (position < 0 || position >= this.length) return null;
    //loops through the list until you reach the position and return the node at specific position
    let counter = 0;
    let current = this.head;
    while (counter != position) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(value, index) {
    //use get function to find the specific node
    let foundNode = this.get(index);

    //if node is found set value of that node to be the value passed to the function and return true
    if (foundNode) {
      foundNode.val = value;
      //if node is not found return false
    } else {
      return false;
    }
  }

  insert(index, value) {
    let newNode = new Node(value);
    //if the index is less than zero or greater than the length return false
    if (index < 0 || index > this.length) return false;
    //if the index is the same as the length , push a new node to the end of the list
    if (index === this.length) return !!this.push(value);
    //if index is 0 , unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(value);
    //otherwise using get() ,acces the node at the index -1
    let prev = this.get(index - 1);
    let temp = prev.next;
    //set next property on that node to be the new node
    newNode.next = temp;
    //increment the length
    this.length++;
    //return true
    return true;
  }

  remove(index) {
    //if the index is less than zero or greater than the length return undefined
    if (index < 0 || index >= this.length) return false;
    //if the index is the same as the length-1, pop
    if (index === this.length - 1) return this.pop();
    //if the index is 0 shift
    if (index === 0) this.shift();
    //otherwise using get() ,access the node at index -1
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    //set the next property on that node to be the next of the next node
    previousNode.next = removed.next;
    //decrement the lenght
    this.length--;
    //return the value of the node removed
    return removed;
  }

  reverse() {
    //swap the head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    //create a variable called next
    let next = null;
    //create a variable called prev
    let prev = null;
    //loop through the list
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    //create a simple arry to store values
    let arr = [];
    //get the head
    let current = this.head;
    //loop through the linkList
    while (current) {
      //display all value
      arr.push(current.val);
      //next element
      current = current.next;
    }
    return arr;
  }
}

var list = new SingleLinkedList();
list.push("hello");
list.push("mbaye");
list.push("sokhna");
list.push("maye");

console.log(list.print());
console.log(list.reverse());
