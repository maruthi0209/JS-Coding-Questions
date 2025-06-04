/*
Move Zeros to End
       [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
Write a function that moves all zeros in an array to the end while maintaining the order of other elements.
*/

function zeroesToEnd(arr) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] == 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
}

console.log(zeroesToEnd([0, 1, 0, 3, 12]))