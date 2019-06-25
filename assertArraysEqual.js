const eqArrays = function(actual, expected) {
  for (let x = 0; x < actual.length; x++) {
    if (actual[x] !== expected[x]) {
      return false;
    }
  }
  return true;
};

const assertArrays = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertArrays([1,2,3],[1,2,3]);
assertArrays([1,2,3],[1,2,'3']);
assertArrays([1,2,3],[1,2,4,3]);