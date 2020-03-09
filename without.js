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

// Function returns a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  source = source.filter(function(char){
    return !itemsToRemove.includes(char)
  })
  return source;
};




// Tests
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]



