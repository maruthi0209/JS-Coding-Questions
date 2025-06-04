/*
Find the Second Largest Element
      [3, 1, 4, 1, 5, 9]  → 5
Write a function to return the second largest number in an array.
*/
function secondLargest(arr) {
    let largest = arr[0]; let secondLargest = 0;
    for(element of arr) {
        if (element >= largest) {
            secondLargest = largest
            largest = element;
        } else {
            if (element >= secondLargest) {
                secondLargest = element
            }
        }
    }
    return secondLargest;
}

console.log(secondLargest([3, 1, 4, 11, 5, 9]))
