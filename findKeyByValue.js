const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`)
  } else {
      console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`)
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue = function(object,value){
  // for(let key in bestTVShowsByGenre){ // easy way to print keys
  for(let key of Object.keys(object)){
    // console.log(key)
    if(object[key] === value){
      return key;
    }
  }
}
let result = findKeyByValue(bestTVShowsByGenre,'The Wire')
console.log(result)

assertEqual(result,'drama')
assertEqual(result,1)