//Check if two arrays equal each other
const eqArrays = function(arr1, arr2) {
  let ifTrue = null;
  if (arr1.length !== arr2.length)
    return false;
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
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    if (currentLetter !== ' ') {
      results[currentLetter] = [];

    }
  }
  for (let i = 0; i < sentence.length; i++) {
    // key
    let currentLetter = sentence[i];
    results[currentLetter].push(i);

  }
  return results;
};



const assertArraysEqual = function(a, b, expectation) {
  if (eqArrays(a, b) === expectation) {
    console.log(`✅✅✅Assertion Passed: ${a} ${b} ${expectation}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${a} ${b} ${expectation}`);
  }

};

assertArraysEqual(letterPositions("hello").h, [0], true);