/*
Flatten a Nested Array
       [1, [2, [3, [4]], 5]] → [1, 2, 3, 4, 5]
Write a function to flatten a nested array into a single array.
 */

function flattenNested(arr) {
    while(!arr.every(element => typeof element === 'number')) {
        arr = arr.flat()
    }
    return arr
}

console.log(flattenNested([1, [2, [3, [4]], 5]]))