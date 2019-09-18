//Linear search
function occurrenceNumber(numbers, x) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === x) {
      count++;
    }
  }
  return count;
}

//BinearySearch

function firstOccurence(numbers, x) {
  let low = 0;
  let high = numbers.length - 1;
  let middle;
  let result = -1;
  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    if (numbers[middle] === x) {
      result = middle;
      high = middle - 1;
    } else if (numbers[middle] < x) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return result;
}

function lastOccurence(numbers, x) {
  let low = 0;
  let high = numbers.length - 1;
  let middle;
  let result = -1;
  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    if (numbers[middle] === x) {
      result = middle;
      low = middle + 1;
    } else if (numbers[middle] < x) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return result;
}
function occurrenceNumber(numbers, x) {
  let first = firstOccurence(numbers, x);
  let last = lastOccurence(numbers, x);
  return last - first + 1;
}
console.log(occurrenceNumber([1, 1, 2, 2, 2, 2, 3], 2));
/**
 * x=10
 * low   high  mid  numbers[middle]
 * 0      6     3      10
 *result=3
 * 0     2      1      4
 * 2     2      2      10
 * result=2
 * 2      1  =>exit loop because low>high
 */

/**
 * x=10
 * low   high  mid  numbers[middle]
 * 0      6     3      10
 *result=3
 * 4     6      5      18
 * 4     5      4      10
 * result=4
 * 5      5     5      18
 * 5      4   =>exit loop because low>high
 */
