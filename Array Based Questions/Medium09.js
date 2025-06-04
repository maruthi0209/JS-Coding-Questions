/*
Flatten a Nested Array
       [1, [2, [3, [4]], 5]] → [1, 2, 3, 4, 5]
Write a function to flatten a nested array into a single array.
 */

function flattenNested(arr) {
    // let temp=[];
    // for(element of arr) {
    //     if (Array.isArray(element)){
    //         element = element.flat()
    //     }
    //     temp.push(element)
    // }
    while(!arr.every(element => typeof element === 'number')) {
        arr = arr.flat()
    }
    return arr
}

console.log(flattenNested([1, [2, [3, [4]], 5]]))