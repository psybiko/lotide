const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);


// Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Cohort", "Cohort"); // pass
assertEqual("burgers", "fries"); // fail
assertEqual(10, 10); // pass
assertEqual(100, 34); // fail
