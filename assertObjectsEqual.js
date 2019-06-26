const eqArrays = function(actual, expected) {
  for (let x = 0; x < actual.length; x++) {
    if (actual[x] !== expected[x]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false;
  }

  for (let x in object1) {
    if (Array.isArray(object1)) {
      if (!eqArrays(object1[x],object2[x])) {
        return false;
      }
    } else if (typeof object1[x] === "object") {
      if (!eqObjects(object1[x],object2[x])) {
        return false;
      }
    } else {
      if (object1[x] !== object2[x]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjects = (object1, object2) => {
  const inspect = require('util').inspect;
  if (eqObjects(object1,object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjects(cd, cd2); // => false

const cd3 = { d: ["2", 3, 4] , c: { a : "1"}};
const cd4 = { c: { a : "1"} , d: ["2", 3, 4] };
assertObjects(cd3, cd4); // => true