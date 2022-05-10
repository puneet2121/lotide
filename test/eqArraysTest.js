const assertEqual = require('../assertEqual')
const eqArray = require('../eqArrays')
let results = eqArray([1,2,3,5],[1,2,4,6])
assertEqual(results,false)