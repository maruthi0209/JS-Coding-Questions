/*
Find Common Keys in Two Objects
  {a: 1, b: 2}, {b: 3, c: 4} → ["b"]
Write a function to find the common keys in two objects.
 */

function findCommonKeys(obj1, obj2) {
    let keys = []
    for(element in obj2) {
        if(Object.hasOwn(obj1, element)) {
            keys.push(element)
        }
    }
    return keys
}

console.log(findCommonKeys({a: 1, b: 2}, {b: 3, c: 4}))