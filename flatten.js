const flatten = (array) => {
  let array2 = [];
  for (let x of array) {
    if (Array.isArray(x)) {
      array2 = array2.concat(flatten(x));
    } else {
      array2.push(x);
    }
  }
  return array2;
};

console.log(flatten([1,2,[3,4],[5,[6,7]]]));