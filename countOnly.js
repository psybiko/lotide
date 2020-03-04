const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:, ${actual}, ===, ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed:, ${actual}, !==, ${expected}`);
  }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}

  for(const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    }

  return results;

};


// Array of first names 
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// Object with first name keys and truthy values. Passed to countOnly function
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});


// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);





// Set a counter
// Loop through the object to determine which names we need to look for in the array. 
// Loop through the array to check if it's there. IF it's there, add 1 count for every instance it's found. 
// Add the count to an object {firstName: number of times it appeared in array}


// The result should return an object containing counts of everything that the input object listed. 
// Result:
//   {
//     "Jason": 1,
//     "Fang": 2,
//   }
