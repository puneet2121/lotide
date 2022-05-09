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
const middle = function(array) {
  if (array.length < 3){
    return false
  }
  let newArray = []
  let theMiddle = Math.floor(array.length / 2);
  if(array.length % 2 === 0){
    resultEven = array[theMiddle -1 ]
    resultEven2 = array[theMiddle]
    newArray.push(resultEven)
    newArray.push(resultEven2)
  }
  else{
    resultOdd = array[theMiddle]
    newArray.push(resultOdd)
  }
  return newArray
}
result = middle([1,2,5,8,9,7,9,8,7,8,7])
console.log(result)
assertArrayEqual(result,[7])