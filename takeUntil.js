const takeUntil = (array,callBack) => {
  let foundElement = false;
  let arraySlice = [];
  while (!foundElement) {
    let element = array.shift();
    callBack(element) ? foundElement = true : arraySlice.push(element);
  }
  return arraySlice;
};

