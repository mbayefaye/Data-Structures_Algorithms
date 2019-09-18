class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    //create the new node with the value passed to the function
    let newNode = new Node(value);
    //check if the head is null set the head and tail to be newNode
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if not set the next prop on the tail to be the newNode
      this.tail.next = newNode;
      //set previous prop on the newly created node to be the tail
      newNode.prev = this.tail;
      //set tail to be newly created node
      this.tail = newNode;
    }
    //increment the length
    this.length++;
    //return ddl
    return this;
  }
  pop() {
    ////check if the head is null return null or undefined
    if (!this.head) return undefined;
    //store the current tail in a variable
    let poppedNode = this.tail;
    //if the length is 1  set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //update the tail to be the previous node.
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    //set newtail next to null
    return poppedNode;
  }
  shift() {
    //if length is 0 return
    if (this.length === 0) return undefined;
    ///store the current head (old head)
    let oldHead = this.head;
    //if the length is 1
    if (this.length === 1) {
      //set the head to be null
      this.head = null;
      //the tail to be null
      this.tail = null;
    } else {
      //update the head to be the next of the old head
      this.head = oldHead.next;
      //set the head's prev prop to null
      this.head.prev = null;
      //set the old head 's next to null
      oldHead.next = null;
    }
    //decrement the length
    this.length--;
    //return oldhead
    return oldHead;
  }

  unshift(value) {
    //create the new node with the value passed to the function
    let newNode = new Node(value);
    let oldNode = this.head;
    //check if the head is null set the head and tail to be newNode
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if not set the next prop on the tail to be the newNode
      this.head.prev = newNode;
      //set previous prop on the newly created node to be the tail
      newNode.prev = null;
      newNode.next = oldNode;
      //set tail to be newly created node
      this.head = newNode;
    }
    //increment the length
    this.length++;
    //return ddl
    return this;
  }

  get(index) {
    //if the index is less than zero return null
    if (index < 0 || index >= this.length) return null;
    //loops through the list until you reach the position and return the node at specific position
    if (index <= this.length / 2) {
      let counter = 0;
      let current = this.head;
      while (counter != index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter != index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  set(value, index) {
    let getIndex = this.get(index);
    if (getIndex) {
      getIndex.val = value;
      return true;
    }
    return false;
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
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    //set next property on that node to be the new node
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    //increment the length
    this.length++;
    //return true
    return true;
  }
  remove(index) {
    //if the index is less than zero or greater than the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    //if the index is the same as the length-1, pop
    if (index === this.length - 1) return this.pop();
    //if the index is 0 shift
    if (index === 0) this.shift();
    //otherwise using get() ,access the node at index -1
    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    //set the next property on that node to be the next of the next node
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.next = null;
    removeNode.prev = null;
    //decrement the lenght
    this.length--;
    //return the value of the node removed
    return removeNode;
  }

  getAllData() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
const dl = new DoublyLinkedList();
dl.push("mbaye");
dl.push("maye");
dl.push("adama");
dl.unshift("fallou");
dl.insert(0, "coumba");
dl.remove(1);
dl.getAllData();
console.log(dl.get(2));
//console.log(dl);
