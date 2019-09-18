/* using heap*/
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    //newNode
    let newNode = new Node(value, priority);
    //new value
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    //get the last index
    let index = this.values.length - 1;
    //store the values itself
    const element = this.values[index];
    //loop
    while (index > 0) {
      //get the parent index
      let parentIndex = Math.floor((index - 1) / 2);
      //get the parent values itself
      let parent = this.values[parentIndex];
      //if the element is less or equal  to the parent then break
      if (element.priority <= parent.priority) break;
      //else swap the element with the parent
      this.values[parentIndex] = element;
      //remplace the element index with the parent index
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    //last item
    let lastItem = this.values.pop();
    //get the parent
    let min = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = lastItem;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (leftChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const hospital = new PriorityQueue();
hospital.enqueue("common cold", 1);
hospital.enqueue("gun shot wound", 5);
hospital.enqueue("high Fever", 2);
hospital.enqueue("concusssion", 3);
hospital.enqueue("broken arm", 4);
hospital.dequeue();

console.log(hospital);
