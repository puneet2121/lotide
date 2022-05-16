
const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) return false;
  }
  return true;
};
const assertArrayEqual = function(actual, expected) {
  if (eqArray(actual,expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const without = function(arr,itemsToRemove) {
  let newarr = [];
  newarr = arr.slice(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < itemsToRemove; j++) {
      if (arr[i] === itemsToRemove[j]) {
        newarr.splice(i,itemsToRemove.length);
      }
    
    }
    
  }
  return newarr;
};
let arr = [1,2,2,3,8,8];
let itemsToRemove = [8];
console.log(without(arr,itemsToRemove));
assertArrayEqual(arr,[1,2,2,3,8,8]);
