const eqArrays = function(actual, expected) {
  for (let x = 0; x < actual.length; x++) {
    if (actual[x] !== expected[x]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(Variable1, Variable2) {
  if (Object.keys(Variable1).length === Object.keys(Variable2).length) {
    for (let x in Variable1) {
      if (typeof Variable1[x] === "object") {
        if (Array.isArray(Variable1)) {
          eqArrays(Variable1[x],Variable2[x]);
        } else {
          if (!eqObjects(Variable1[x],Variable2[x])) {
            return false;
          }
        }
      } else {
        if (Variable1[x] !== Variable2[x]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};
// we are looking for a false
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false