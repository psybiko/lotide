// Assertions functions
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

const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅Assertion Passed: ${a} === ${b} `);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a} === ${b}`);
  }

};

// Flatten function: given an array with other arrays inside, it can flatten it into a single-level array.
// recursion solves this problem
const flatten = function(arrays){
  let newArr = [];
  for (char of arrays) {
    if (Array.isArray(char)) {
      for (let nestedChars of char) {
        newArr.push(nestedChars)
      }
    } else {
      newArr.push(char)
    }
  } 
  return newArr;
};


// Tests
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => [1, 2, 3, 4, 5, 6