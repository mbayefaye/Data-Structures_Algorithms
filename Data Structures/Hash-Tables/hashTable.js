/**
 *hash tables are collections of key-value pairs
 *hash tables can find values quickly given key
 *separate chaining and linear probing are two strategies used to deal with keys that hash the same value
 */
class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
  values() {
    let valueArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArray.includes(this.keyMap[i][j][1]))
            valueArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArray;
  }
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0]))
            keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

const ht = new HashTable();
console.log(ht.set("hello world", "goodbye"));
console.log(ht.set("dogs", "are cool"));
console.log(ht.set("cats", "are fine"));
console.log(ht.set("i love", "pizza"));
console.log(ht.set("i love", "pizza"));
console.log(ht.get(""));
console.log(ht.values());
console.log(ht.keys());
console.log(ht);
