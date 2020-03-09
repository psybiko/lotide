// const assertEqual = require(`../assertEqual`) 
const tail = require(`../tails`);
const assert = require('chai').assert;

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// // Test Case 1: Check the returned array elements
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


describe("#tail", () => {

  it("returns two elements", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

});