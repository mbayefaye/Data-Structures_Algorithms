function insertionSort(array) {
  //First, we start a loop beginning at index 1 that runs through the entire array.
  for (var i = 1; i < array.length; i++) {
    //The current index is kept in the variable index.
    let currentValue = array[i];
    console.log(currentValue);
    //we begin an inner for loop We check whether the value to the left of position is greater than the temp_value.
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      // If it is, we then use array[j+1] = array[j]
      array[j + 1] = array[j];
    }
    //then assign the current value to the newVal
    array[j + 1] = currentValue;
  }
  return array;
}

var data = Array.apply(null, { length: 100000 }).map(
  Function.call,
  Math.random
);

console.log(insertionSort(data));
