function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    //sets minIndex to be whatever index i represents.
    let minIndex = i;
    //kicks off an inner for loop that starts at i + 1.
    for (let j = i + 1; j < array.length; j++) {
      //checks each element of the array that has not yet been sorted and looks for the lowest number.
      if (array[j] < array[minIndex]) {
        //change minIndex to j index
        minIndex = j;
      }
    }
    //checks if index is different than minIndex then swap
    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/*Tests*/
var data = Array.apply(null, { length: 1000 }).map(Function.call, Math.random);
const ss = selectionSort(data);
console.log(ss);
