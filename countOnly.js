
const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
      console.log(`Assertion failed: ${actual} !== ${expected}`)
  }
};
const countOnly = function(allItems, itemsToCount) { 
  const results = {}

  for(const items of allItems){ 
    if(itemsToCount[items]){          //it will check if itemsToCount which means items (firstName ) is defined or true it will execute the fuction
      if(results[items]){
        results[items] += 1;
      } else {
        results[items] = 1
      }
    }
  
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(results['Jason']);

assertEqual(results["Jason"], 1); // True