const tail = function(array1) {
  return (array1.slice(1));
};

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

assertEqual(tail([5,6,7,8]),[6,7,8]);
assertEqual(tail([5,"grayson","jump",4]),["grayson","jump",4]);
