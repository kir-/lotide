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

const without = (source, itemsToRemove) => {
  // eslint-disable-next-line brace-style
  return source.filter(function(element) { return itemsToRemove.includes(element) ? false : true; });
};

// console.log(without([1,2,3],[1,2,4]));
