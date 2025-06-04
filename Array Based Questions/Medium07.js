/*
Find Peak Element
       [1, 3, 20, 4, 1, 0] →  20
Write a function to find a peak element in an array. An element is a peak if it is not smaller than its neighbours.
 */

function peakElement(arr) {
    let peak;
    for(let i=1; i < arr.length-1; i++) {
        if(arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
            peak = arr[i];
        }
    }
    return peak
}

console.log(peakElement([1, 3, 20, 4, 1, 0]))