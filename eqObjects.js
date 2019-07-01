const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false;
  }

  for (let x in object1) {
    if (Array.isArray(object1)) {
      if (!eqArrays(object1,object2)) {
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
// we are looking for a false
/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const cd3 = { d: ["2", 3, 4] , c: { a : "1"}};
const cd4 = { c: { a : "1"} , d: ["2", 3, 4] };
console.log(eqObjects(cd3, cd4)); // => true*/

module.exports = eqObjects;