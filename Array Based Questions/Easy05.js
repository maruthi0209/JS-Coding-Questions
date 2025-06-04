/*
Check if Array is Sorted
      [1, 2, 3, 4, 5]  →  true
Write a function to check if an array is sorted in ascending order.
 */

function checkArraySorted(arr) {
    let isSorted; let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) { 
            count++ 
        }
    }
    count == arr.length-1? isSorted = true : isSorted = false;
    return isSorted
}

console.log(checkArraySorted([1, 2, 3, 4, 5]))