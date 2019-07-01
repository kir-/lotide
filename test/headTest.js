const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 4 for [4,3,5,6]", () => {
    assert.strictEqual(head([4,3,5,6]),4);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

});


