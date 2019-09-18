function maxElement(arr) {
  let min = 0;
  let max = arr.length - 1;
  let middle;
  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (arr[middle] > arr[middle + 1] && arr[middle] > arr[middle - 1]) {
      return arr[middle];
    } else if (arr[middle] > arr[middle + 1] && arr[middle] < arr[middle - 1]) {
    } else {
      return arr[min];
    }
  }
}
console.log(maxElement([120, 100, 80, 20, 0]));

/**
 *  8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1 
i-> 0  1   2   3    4    5    6    7   8  9  10

 *middle = 5       Arr[middle] = 200     Arr[next] = 400   A[prev]=100
 
 * case 1: if middle value is greater than  next and prev the, midlle is the max
 * case 2:i If middle element is greater than its next element and smaller than the
  previous element then maximum lies on left side of mid
 * case 3:If mid element is smaller than its next element and greater than 
 the previous element then maximum lies on right side of mid
 */

/**
 The maximum element is the only element whose next is smaller than it. If there is no next smaller element, then there is no rotation (last element is the maximum). We check this condition for middle element by comparing it with elements at mid – 1 and mid + 1.
If maximum element is not at middle (neither mid nor mid + 1), then maximum element lies in either left half or right half.
If middle element is greater than the last element, then the maximum element lies in the left half.
Else maximum element lies in the right half.
 */
