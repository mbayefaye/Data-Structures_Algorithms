function mergeSort(array) {
  //check the size of the array
  if (array.length <= 1) return array;

  //divide the array into two halves:left,right
  let middle = Math.floor(array.length / 2);
  //left side
  let leftSide = array.slice(0, middle);
  //right side
  let rightSide = array.slice(middle);
  //merge recursively the left side
  let leftSorted = mergeSort(leftSide);
  //merge recursively the right side
  let rightSorted = mergeSort(rightSide);

  //merge(concat) two sides
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  //initialize a empty array
  let result = [];
  //initialize an index for the left array to track the current index;
  let leftIndex = 0;
  //initialize an index for the right array the current index;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    //if the left index is bigger than the right then push the leftiNdex into the array
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      //increment the index
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  //return array
  return result;
}

var data = Array.apply(null, { length: 100000 }).map(
  Function.call,
  Math.random
);

const ms = mergeSort(data);
console.log(ms);
