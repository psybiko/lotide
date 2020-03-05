const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:, ${actual}, ===, ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed:, ${actual}, !==, ${expected}`);
  }

};

const findKeyByValue = function(objectKey, returnValue) {
  // loop through the object
  for (const property in objectKey) {
    // if the returnValue(object's value) is in objectKey, return that KEY
    if (objectKey[property] === returnValue) {
      return property;
    }
  }
};


// TEST ASSERTIONS
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

