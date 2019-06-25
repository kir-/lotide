const inputArrays = function(actual, expected) {
  let string1 = '';
  let string2 = '';
  for (let x = 0; x < actual.length; x++) { // Goes through each element of the array.
    string1 += actual[x] + "|"; // Builds strings based on the arrays.
    string2 += expected[x] + "|";
  }
  if (string1 === string2) { // Compares strings.
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) { // Checks if input is an array.
    inputArrays(actual, expected);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual([1,2,3], [1,2,3]);