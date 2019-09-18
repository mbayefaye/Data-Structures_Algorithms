function power(base, exposant) {}

const p = power(2, 4);
console.log(p);

function countDown(num) {
  //base case
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  //base case
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/* walkthrough sumRange  =>
    num =4 =>
      4!=1  => return 4 + sumRange(3);
       num=3 =>
         3!=1  => return 3 + sumRange(2);
            num=2 =>
                2!=1  => return 2 + sumRange(1);
                  num=1 =>
                      1=1  => return 1 (base case)

*/

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  while (num > 0) {
    return num * factorial(num - 1);
  }
}

function productOfArray(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
}
const pro = productOfArray([2, 3, 4, 5]);
console.log(pro);

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

function palindrome(str) {
  if (str.length <= 1) {
    return str;
  }
  return;
}
const rev = reverse("mbaye");
console.log(rev);
