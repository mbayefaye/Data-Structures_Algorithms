/**
 * An aray visualized as a nearly complete binary tree.
 * index -> 1  2  3   4   5   6   7   8   9  10
 * values->16 14  10  8   7   9   3   2   4   1
 * root of tree = first element (i=1)
 * parent(i) =>i/2;
 * left(i) =2i
 * right => 2i+1
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  push(value) {
    //new value
    this.values.push(value);
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
      if (element <= parent) break;
      //else swap the element with the parent
      this.values[parentIndex] = element;
      //remplace the element index with the parent index
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    //last item
    let lastItem = this.values.pop();
    //get the parent
    let parent = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = lastItem;
      this.sinkDown();
    }
    return parent;
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
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }
      if (leftChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

const mbh = new MaxBinaryHeap();
mbh.push(41);
mbh.push(39);
mbh.push(33);
mbh.push(18);
mbh.push(27);
mbh.push(12);
mbh.push(55);
mbh.push(45);
console.log(mbh.extractMax());
console.log(mbh);
