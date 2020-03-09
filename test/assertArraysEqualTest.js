const eqArrays = require(`../eqArrays`);
const assertArraysEqual = require(`../assertArraysEqual`);

// Test
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"],true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false
