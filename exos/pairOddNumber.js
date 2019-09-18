function pairOddNumber(a, b) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      odd++;
    } else {
      even++;
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (b[j] % 2 !== 0) {
      odd++;
    } else {
      even++;
    }
  }
  return Math.min(odd);
}
console.log(pairOddNumber([9, 14, 6, 2, 11], [8, 4, 7, 20]));
