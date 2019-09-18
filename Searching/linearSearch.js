function linearSearch(array, key) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return index;
}
console.time();
const ls = linearSearch([1, 2, 7, 8, 35, 90], 90);
console.timeEnd();
console.log(ls);
