const assertEqual = function(actual, expected) {
  if (actual === expected) {
    assertEqual((`✅✅✅Assertion Passed:, ${actual}), ===, ${expected}`));
  } else {
    console.log(`❌❌❌Assertion Failed:, ${actual} !==, ${expected}`);
  }

};

const countLetters = function(sentence) {
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


// test
console.log(countLetters('lighthouse labs'))
console.log(countLetters('hello world'))