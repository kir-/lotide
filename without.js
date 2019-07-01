const without = (source, itemsToRemove) => {
  // eslint-disable-next-line brace-style
  return source.filter(function(element) { return itemsToRemove.includes(element) ? false : true; });
};

//console.log(without([1,2,3],[1,2]));

module.exports = without;