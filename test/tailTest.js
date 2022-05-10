const tail = require('../tail');
const assert = require('chai').assert;
describe("#tail", () => {
  it("returns the tail of the array all the values exculding the first",() => {
    assert.deepEqual(tail([1,2,3,4],[2,3,4]));
  });
});







// const tail = function(arr) {
//   const newarr = arr.slice(1,arr.length);
//   console.log(newarr);
  
// };

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);