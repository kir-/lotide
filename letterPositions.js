const letterPositions = (sentance) => {
  const results = {};
  let index = 0;
  for (let x of sentance) {
    if (x !== " ") {
      x in results ? results[x].push(index) : results[x] = [index];
    }
    index ++;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));