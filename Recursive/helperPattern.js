/**Helper function pattern */
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

//Example of using helper pattern
function collectionOdds(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
const heper = collectionOdds([10, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(heper);
