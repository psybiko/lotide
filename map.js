// Test/ Assertion Tests
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


const assertArraysEqual = function (a, b, expectation) {
  if (eqArrays(a, b) === expectation) {
    console.log(`✅✅✅Assertion Passed: ${a} ${b} ${expectation}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a} ${b} ${expectation}`);
  }

};


// Map logic
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);

// Test Cases
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'],true );


