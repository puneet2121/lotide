const assertEqual = require('../assertEqual');
const head = function(arr) {
  return arr[0];
};
console.log(head([1,3,4]));


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(head([1,2,3]), 1);
assertEqual(head([2,3,4]),3);
const tail = function(arr) {
  arr.shift();
  return arr;
};
console.log(tail([1,3,4]));


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(head([1,2,3]), 1);
assertEqual(head([2,3,4]),3);