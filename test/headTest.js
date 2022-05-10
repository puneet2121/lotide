// const assertEqual = require('../assertEqual');
// const head = function(arr) {
//   return arr[0];
// };
// console.log(head([1,3,4]));

// assertEqual(head([1,2,3]), 1);
// assertEqual(head([2,3,4]));
const assert = require('chai').assert;
const head = require('../head');
describe("#head", () => {
  it("returns 1 for [1,2,3]",() => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it("returns '5' for ['5']",() => {
    assert.strictEqual(head(['4']), '5');
  });
});