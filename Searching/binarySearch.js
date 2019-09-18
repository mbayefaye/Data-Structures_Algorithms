function binarySearch(array, key) {
  let steps = 0;
  //not found
  let answer = "not found";
  //the smallest index of the array
  let min = 0;
  //the highest index of the array
  let max = array.length - 1;
  //while the min is less than the max
  while (min <= max) {
    steps++;
    //set the midlle index of the array
    let middle = Math.floor((min + max) / 2);
    //if middle index is equal to the key return the key
    if (array[middle] === key) {
      return middle;
      //if middle index is less than the key then increment min
    } else if (array[middle] < key) {
      min = middle + 1;
      //if middle index is greater than the key then decrement max
    } else {
      max = middle - 1;
    }
  }
  console.log(steps);
  return answer;
}

//test
var data = Array.apply(null, { length: 100 }).map(Function.call, Math.random);
const bs = binarySearch(data, 23);
console.log(bs);
