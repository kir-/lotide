
const eqObjects = require('./eqObjects');
const assertObjects = (object1, object2) => {
  const inspect = require('util').inspect;
  if (eqObjects(object1,object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

/*const ab = { a: "1", b: "2" };
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
assertObjects(cd3, cd4); // => true*/

module.exports = assertObjects;