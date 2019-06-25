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

const middle = (array1) => {
  let arrayLength = array1.length;
  let array2 = [];
  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      array2.push(array1[(arrayLength / 2) - 1]);
      array2.push(array1[arrayLength / 2]);
    } else {
      array2.push(array1[(arrayLength - 1) / 2]);
    }
  }
  return array2;
};

console.log(middle([1,2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));