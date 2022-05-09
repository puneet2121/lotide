const eqArray = function(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  

  for(let i = 0;i < arr1.length; i++){
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



let results = eqArray([1,2,3,5],[1,2,4,6])
console.log(results);
assertArrayEqual([1,2,2,3],[1,2,2,3])