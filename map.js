const eqArray = function(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++){
    if(arr2[i] !== arr1[i]) return false;
  }
  return true;
};
const assertArrayEqual = function(actual, expected) {
  if (eqArray(actual,expected)) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`)
  } else {
      console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`)
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
  // empty for now :)
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
}

const results1 = map(words, word => word[0]);
assertArrayEqual(results1,['g','c','t' ,'m', 't'])
