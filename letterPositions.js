// Check if two arrays equal each other
const eqArrays = function (arr1, arr2) {
  let ifTrue = null;
  if (arr1.length !== arr2.length)
    return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      ifTrue = false;
    } else {
      ifTrue = true;
    }
  }
  return ifTrue;
};





const letterPositions = function(sentence) {
  const results = {}
  // logic to update results here
  return results;
};

console.log()