const map = (array, callBack) => {
  const arrayMapped = [];
  for (let element of array) {
    arrayMapped.push(callBack(element));
  }
  return arrayMapped;
};
let array1 = [1,2,3,4,5];
console.log(map(array1,(x)=> x * 2));