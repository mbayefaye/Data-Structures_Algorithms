function searchElementInSortedArray(arr, key) {
  let answer = "not found";
  let min = 0;
  let max = arr.length;
  let middle;
  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (arr[middle] === key) {
      return middle;
    } else if (arr[middle] < key) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return answer;
}

const s = searchElementInSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
console.log(s);
