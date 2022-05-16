const eqArray = require('./eqArrays');
const assertArrayEqual = function(actual, expected) {
  if (eqArray(actual,expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  if (array instanceof Array && callback instanceof Function) {
    let newArray = [];
    let i = 0;
    while (i < array.length && !callback(array[i], i, array)) {
      newArray.push(array[i]);
      i++;
    }

    return newArray;
  } else {
    return [];
  }
};
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArrayEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ])
module.exports = takeUntil;
