const tail = require('../tail');
const assert = require('chai').assert;

describe("#eqArraysTest", () => {
  it("returns 7 for [5,6,4,6,7]", () => {
    assert.deepEqual(tail([5,6,4,6,7]),7);
  });

});