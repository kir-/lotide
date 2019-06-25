const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    let string1 = '';
    let string2 = '';
    for (let x = 0; x < actual.length; x++) {
      string1 += actual[x] + "|";
      string2 += expected[x] + "|";
    }
    if (string1 === string2) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual([1,2,3], [1,2,3]);