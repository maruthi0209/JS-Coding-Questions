/*
Reverse an Array
       [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
Write a function to reverse the elements in an array.
*/

function reverseAnArray(arr) {
    let revarr = [];
    for(let i=arr.length-1; i>=0; i--) {
        revarr.push(arr[i])
    }
    return revarr;
}

console.log(reverseAnArray([1, 2, 3, 4, 5]))