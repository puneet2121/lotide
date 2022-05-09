const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`)
    } else {
        console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`)
    }
};
const head = function(arr){
    return arr[0];
}
console.log(head([1,3,4]));


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(head([1,2,3]), 1);
assertEqual(head([2,3,4]),3)