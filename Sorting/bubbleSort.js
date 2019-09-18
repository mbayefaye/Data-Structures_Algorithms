function bubbleSort(arr) {
  var noSwaps;
  //loops through the array from the greatest value to the lowest
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

//another way to write a bubbleSort : ⚠️ this one is slow
function bubbleSort2(arr) {
  let sorted;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var data = Array.apply(null, { length: 100000 }).map(
  Function.call,
  Math.random
);
console.time();
console.log(bubbleSort2(data));
console.timeEnd();

console.time();
console.log(bubbleSort(data));
console.timeEnd();
