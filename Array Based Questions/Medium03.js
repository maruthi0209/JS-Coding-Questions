/*
Find Missing Number
       [1, 2, 4, 5]   → [3]
Given an array of consecutive numbers with one missing, find the missing number.
 */

function missingNumber(arr) {
    for(let i=0; i < arr.length-1; i++) {
        if(arr[i+1]-arr[i] != 1) {
            return arr[i] + 1;
        }
    }
}

console.log(missingNumber([1, 2, 4, 5]))