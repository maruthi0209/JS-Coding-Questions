/*
Count Object Properties
       {a: 1, b: 2, c: 3} → 3 
Write a function that returns the number of properties in an object.
 */

function countProperties(obj) {
    return Object.keys(obj).length
}

console.log(countProperties({a: 1, b: 2, c: 3}))