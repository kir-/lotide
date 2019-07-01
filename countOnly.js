const countOnly = function(allItems, itemsToCount) {
  const counted = {};
  for (let x in itemsToCount) {
    let count = 0;
    if (itemsToCount[x] === true) {
      allItems.forEach((y) => (y) === x && count++);
    }
    if (count)
      counted[x] = count;
  }
  return counted;
};
/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);*/
module.exports = countOnly;