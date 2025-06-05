/*
Deep Clone an Object
      {a: 1, b: {c: 2}} → {a: 1, b: {c: 2}}
Write a function to create a deep clone of an object.
 */

function deepClone(object) {
    let clonedObject = JSON.parse(JSON.stringify(object))
    return clonedObject;
}

console.log(deepClone({a: 1, b: {c: 2}}))