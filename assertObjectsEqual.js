// Returns true if both objects have identical keys with identical values
// otherwise you get back false
const eqObjects = function (object1, object2) {
  // Store objects1 and object2 keys in variables
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  }
  return true;
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }

};

// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = {a: "1",b: "2",c: "3"};

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab, abc);
