/*
Get Object Keys
      {a: 1, b: 2, c: 3} → ["a", "b", "c"]
Write a function that returns an array of all the keys in an object.
*/

function getObjectKeys(obj) {
    return Object.keys(obj)
}

console.log(getObjectKeys({a: 1, b: 2, c: 3}))