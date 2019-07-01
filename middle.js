
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
    return array2;
  }
  
};

module.exports = middle;

