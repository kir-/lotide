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

const countOnly = function(allItems, itemsToCount) {
  const counted = {};
  for (let x in itemsToCount) {
    let count = 0;
    if (itemsToCount[x] === true) {
      allItems.forEach((y) => (y) === x && count++);
    }
    if (count)
      counted[x] = count;
  }
  return counted;
};

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);