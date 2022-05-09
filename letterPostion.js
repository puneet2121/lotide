const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
      console.log(`Assertion failed: ${actual} !== ${expected}`)
  }
};
const letterPositions = function (sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === ' ') {
      continue;
    }
    // console.log(results,i,char)
    if (char in results) {
      // sc2 =  the letter already exist in the result so you just add new index.
      results[char].push(i)
    } else {
      //sc1-  is this is your first time seen a letter 
      // create a new key in results for that letter and make the value an array with that letters index
      results[char] = []
      results[char].push(i);

    }



    // results[char] = i;



  }
  return results;
}

let result = letterPositions("lighthouse in the house")
console.log('this is the end result', result)
console.log(result.l)
assertEqual(result.g[0], 2);