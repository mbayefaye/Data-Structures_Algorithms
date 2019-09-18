/*
You are given a list of n-1 integers and these integers are in the range of 1 to n. 
There are no duplicates in the list.
 One of the integers is missing in the list. Write an efficient code to find the missing integer.
*/
function missingNumber(array, n) {
  //1. Get the sum of numbers which is total = n*(n+1)/2
  let sum = ((n + 1) * (n + 2)) / 2;
  //2. Subtract all the numbers from sum and you will get the missing number
  for (let i = 0; i < n; i++) {
    sum -= array[i];
  }
  return sum;
}

console.log(missingNumber([1, 2, 4, 5, 6, 7, 8, 10], 8));
