/*
Merge Two Objects
      {a: 1, b: 2}, {b: 3, c: 4} → {a: 1, b: 3, c: 4}
Write a function that merges two objects, giving priority to the properties of the second object in case of conflict.
*/

function mergeTwoObjects(obj1, obj2) {
    const entries = Object.entries(obj2)
    for(const [key, value] of entries) {
        obj1[`${key}`] = value;
    } 
    return obj1
}

console.log(mergeTwoObjects({a: 1, b: 2}, {b: 3, c: 4}))