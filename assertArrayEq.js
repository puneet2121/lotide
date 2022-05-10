const eqArray = require('./eqArrays');
const assertArrayEqual = function(actual, expected) {
  if (eqArray(actual,expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



let results = eqArray([1,2,3,5],[1,2,4,6]);
console.log(results);
assertArrayEqual([1,2,2,3],[1,2,2,3]);
module.exports = assertArrayEqual;