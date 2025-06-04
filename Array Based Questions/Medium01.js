/*
Rotate an Array
      [1, 2, 3, 4, 5], 2  → [4, 5, 1, 2, 3]
Write a function that rotates an array to the right by a given number of steps.
*/

function rotateArray(arr, num) {
    let rotate = []
    // for (let i=(arr.length - num); i < arr.length; i++) {
    //     rotate.push(arr[i])
    // }
    // for (let i=0; i < (arr.length-num); i++) {
    //     rotate.push(arr[i])
    // }
    for(let i=0; i < arr.length; i++) {
        if(arr.length-num+i < arr.length ){
            rotate.push(arr[arr.length-num+i])
        } else {
            rotate.push(arr[i-num])
        }
    }
    return rotate
}

console.log(rotateArray([1, 2, 3, 4, 5], 3))