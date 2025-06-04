/* 
Convert Array to Object
      [["name", "Alice"], ["age", 25]] → {name: "Alice", age: 25}
Write a function that converts an array of key-value pairs into an object.
*/

function arrayToObject(arr) {
    let obj = {}
    for (element of arr) {
        obj[`${element[0]}`] = `${element[1]}`
    }
    return obj
}

console.log(arrayToObject([["name", "Alice"], ["age", 25]]))