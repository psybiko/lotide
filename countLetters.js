const assertEqual = function (actual, expected, expectation) {
  if ((actual === expected) === expectation) {
    console.log(('✅✅✅Assertion Passed:, ', actual, expected, expectation));
  } else {
    console.log('❌❌❌Assertion Failed:', actual, expected, expectation);
  }

};

const countLetters = function (sentence) {
  const noSpaces = sentence.split(" ").join("");
  let results = {}
  for (let char of noSpaces) {
    if (results[char]) {
      results[char] += 1
    } else {
      results[char] = 1
    }
  }
  return results
};


// unit tests
// console.log(countLetters('lighthouse labs'))
// console.log(countLetters('hello world'))


// assertEqual(countLetters('KC'), {
//   K: 1,
//   C: 1
// }, true)
// assertEqual(countLetters('KC KC'), {K:2, C:2}, true)