function howManyRotation(numbers, x) {
  let low = 0;
  let high = numbers.length - 1;
  let middle;
  let result = -1;
  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    //next value
    let next = (middle + 1) % x;
    //prev value
    let prev = (middle + x - 1) % x;

    if (numbers[low] <= numbers[high]) {
      return low;
    } else if (
      numbers[middle] <= numbers[next] &&
      numbers[middle] <= numbers[prev]
    ) {
      return middle;
    } else if (numbers[middle] <= numbers[high]) {
      high = middle - 1;
    } else if (numbers[middle] >= numbers[low]) {
      low = middle + 1;
    }
  }
  return -1;
}

console.log(howManyRotation([15, 22, 23, 28, 31, 38, 5, 6, 8, 10, 11], 31));

/**
 *  2    3    5    8    11    12
i-> 0    1    2   3    4     5
 *
 *
 *
 *
 */
