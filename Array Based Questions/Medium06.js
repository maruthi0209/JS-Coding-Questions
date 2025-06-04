/*
Pair Sum
       [2, 4, 3, 5, 7, 8, 9], 7 →  [[4, 3], [2, 5]]
Write a function to find all pairs in an array whose sum is equal to a given target.
 */

function pairSum(arr, num) {
    pair = []
    for(let i=0; i < arr.length; i++) {
        for(let j=i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == num) {
                pair.push([arr[i], arr[j]])
            }
        }
    }
    return pair
}

console.log(pairSum([2, 4, 3, 5, 7, 8, 9], 7))