const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  actual.forEach((element,index) => {
    if (Array.isArray(element) && Array.isArray(expected[index])) {
      if (!eqArrays(element,expected[index])) {
        return false;
      }
    } else if (element !== expected[index]) {
      return false;
    }
  });
  return true;
};

module.exports = eqArrays;
