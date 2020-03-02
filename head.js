// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Cohort", "Cohort"); // pass
assertEqual("burgers", "fries"); // fail
assertEqual(10, 10); // pass
assertEqual(100, 34); // fail

// FUNCTION IMPLEMENTATION
const head = function(array) { 
  return array[0]
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 1); // undefined
assertEqual(head([1]), 1); // pass