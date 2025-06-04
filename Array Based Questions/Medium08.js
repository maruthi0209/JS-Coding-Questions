/*
Find the First Duplicate
       [2, 1, 3, 5, 3, 2] → 3
Write a function to return the first duplicate value in an array.
 */

function firstDuplicates(arr) {
    let temp = []
    for(element of arr) {
        if(!temp.includes(element)){
            temp.push(element)
        } else {
            return element
        }
    }
}

console.log(firstDuplicates([2, 1, 3, 5, 3, 2]))