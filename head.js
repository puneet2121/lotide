const assertEqual = function(actual, expected) {
    if (actual === expected){
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
assertEqual(1, 1);
assertEqual(1,3)