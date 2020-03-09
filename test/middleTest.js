const eqArrays = require(`../eqArrays`);
// const assertArraysEqual = require(`../assertArraysEqual`);
const assert = require("chai").assert;
const middle = require(`../middle`);

// TEST CODE

// For arrays with one or two elements
// assertArraysEqual(middle([1]), [1], []) // => []
// assertArraysEqual(middle([1, 2]), [1,2], []) // => []

// // For arrays with odd number of elements
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

// // For arrays with even number of elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])


describe("#middle", () => {

  // Assertion tests for arrays with two or less elements
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), [1], []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [1, 2], [])
  });

  // For arrays with an odd number of elements
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2])
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });

  // For arrays with even number of elements
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })

})