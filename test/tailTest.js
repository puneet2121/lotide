const assertEqual = require('../assertEqual');
const tail = function(arr) {
  const newarr = arr.slice(1,arr.length);
  console.log(newarr);
  
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
