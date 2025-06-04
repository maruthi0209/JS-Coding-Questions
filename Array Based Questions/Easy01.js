/*
Find the Largest Element in an Array
      [3, 1, 4, 1, 5, 9]   → 9
Given an array of numbers, write a function to return the largest number. 
 */

function findLargestElement(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargestElement([3, 1, 4, 11, 5, 9]))