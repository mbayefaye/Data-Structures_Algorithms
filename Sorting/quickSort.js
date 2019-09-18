function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    //call the pivot on array
    let pivotIndex = pivot(array, left, right);
    //recursively call quicksort to the left
    quickSort(array, left, pivotIndex - 1);
    //recursively call quicksort to the right
    quickSort(array, pivotIndex + 1, right);
  }
  //return array
  return array;
}

function pivot(array, start = 0, end = array.length + 1) {
  //let initialize the pivot as  array[0]
  var pivot = array[start];
  //counter
  var swapIndex = start;
  //loop through from the second index of array
  for (let i = start + 1; i < array.length; i++) {
    //if the pivot is greater than the element of array
    if (pivot > array[i]) {
      //increment the counter
      swapIndex++;
      //then swap the number of element lesser than the  pivot with i
      swap(array, swapIndex, i);
    }
  }
  //swap the pivot with swapIndex
  swap(array, start, swapIndex);
  //return the swapIndex
  return swapIndex;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

////another method of quickSort : easy to understand .
function Qsort(arr) {
  if (arr.length === 0) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return Qsort(left).concat(pivot, Qsort(right));
}

var data = Array.apply(null, { length: 1000 }).map(Function.call, Math.random);
//method 1
console.log(Qsort(data));
//method 2
console.log(quickSort(data));
