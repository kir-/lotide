const countLetters = (sentance) => {
  let letterHolder = {};
  for (let x of sentance) {
    //if (x.match(/[a-zA-Z]/)) {
    if (x !== " ") {
      x in letterHolder ? letterHolder[x]++ : letterHolder[x] = 1;
    }
  }
  return letterHolder;
};

//console.log(countLetters("hello my name is"));
module.exports = countLetters;