function radixSort(nums) {
  //figure out how many digits the largest number has.
  let maxDigitsCount = mostDigits(nums);
  console.log(maxDigitsCount);
  //loop from k=0 up to this largest num of digits
  for (let k = 0; k < maxDigitsCount; k++) {
    //for each iteration of loop
    //create a bucket:empty array (0 to 9);
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //place each number in the corresponding bucket
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      //replace our existing array with values in our buckets (0->9)
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }
  //return list at the end
  return nums;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  let stringNumber = num.toString();
  return stringNumber.length;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(radixSort([1234, 45, 98, 12, 567, 98876, 5689]));

/*function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}*/
