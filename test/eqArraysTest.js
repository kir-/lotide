const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


describe("#eqArrays", () => {
  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true);
  });

});