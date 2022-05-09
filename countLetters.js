const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
      console.log(`Assertion failed: ${actual} !== ${expected}`)
  }
};

const countLetters = function(name){
  let result = {};
  for(letter of name){
    if(result[letter]){
      result[letter] +=  1;
    } else{
      result[letter] = 1;
    }
  }
  return result;
}
console.log(countLetters('uuuuneeeeet'));
const result = countLetters('neet')
console.log(result['t'])
assertEqual(result['t'],1)
