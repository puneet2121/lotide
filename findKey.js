const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};
const findKey = function(object,value) {
  // for(let key in bestTVShowsByGenre){ // easy way to print keys
  for (let key in object) {
    if (value(object[key])) {
      return key;
    }
  }
};
let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
},  x => x.stars === 2);
console.log(result);
assertEqual(result,'noma');