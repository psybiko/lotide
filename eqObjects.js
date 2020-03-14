const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:, ${actual}, ===, ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed:, ${actual}, !==, ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {
  // let isTrue = null;
  if (arr1.length !== arr2.length)
    return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // isTrue = false;
      return false
    } else {
      // isTrue = true;
      return true
    }
  }
  // return isTrue;
};

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
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
      return false;
    } 
    
  }
  return true;
};


// ASSERTION TESTS
const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
assertEqual(eqObjects(ab, abc), false); // => false

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => false