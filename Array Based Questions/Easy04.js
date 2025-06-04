/*
Remove Duplicates from an Array
       [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
Write a function to remove duplicate values from an array.
*/

function removeDuplicates(arr) {
    let newarr = []
    for(element of arr) {
        if(!newarr.includes(element)) {
            newarr.push(element)
        }
    }
    return newarr
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))