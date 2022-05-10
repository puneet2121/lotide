
const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) return false;
  }
  return true;
};
let results = eqArray([1,2,3,5],[1,2,4,6]);
console.log(results);
module.exports = eqArray;