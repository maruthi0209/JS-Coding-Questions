/*
Get Object Values
      {a: 1, b: 2, c: 3} → [1, 2, 3]
Write a function that returns an array of all the values in an object.
 */

function getObjectValues(obj){
    return Object.values(obj)
}

console.log(getObjectValues({a: 1, b: 2, c: 3}))