// Check if two arrays equal each other
const eqArrays = function (arr1, arr2) {
  let isTrue = null;
  if (arr1.length !== arr2.length)
    return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isTrue = false;
    } else {
      isTrue = true;
    }
  }
  return isTrue;
};
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))
// console.log(eqArrays([1,2,3], [1,2,3]))

const assertArraysEqual = function (a, b, expectation) {
  if (eqArrays(a, b) === expectation) {
    console.log(`✅✅✅Assertion Passed: ${a} ${b} ${expectation}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a} ${b} ${expectation}`);
  }

};


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"],true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false