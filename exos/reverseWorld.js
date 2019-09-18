function reverseWorld(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    newString += element;
  }
  return newString;
}

console.log(reverseWorld("sredoC dna dlroW olleH"));
