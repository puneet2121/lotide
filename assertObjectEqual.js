
const eqObjects = function(object1, object2) {
  const eqArray = function(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(let i = 0;i < arr1.length; i++){
      if(arr2[i] !== arr1[i]) return false;
    }
    return true;
  };
  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  
  for(key in object1){
    if (Array.isArray(object1[key])){
      if (!object2[key]){
        return false;
      }
      if (!eqArray(object1[key],object2[key])) return false;
    } else{
      if(!object2[key]){
        return false;
  
      }else{
        if(object1[key] !== object2[key]){
          return false;
        }
      }
    }
    
  
  }
  
  return true;
}
const assertObjectEqual = function(actual, expected) {
  if (eqObjects(actual === expected)){
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`)
  } else {
      console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`)
  }
};
const ab = { a: "1", b: [2,4,6], c: '4' };
const ba = { a: "1", b: [2,4,6], c: '4' };
asserteqObjects(ab,ba);
