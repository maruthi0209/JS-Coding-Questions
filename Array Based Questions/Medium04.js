/*
Find the Maximum Product of Two Elements
       [3, 5, -2, 8, 11] → 8*11 →88
Write a function to find the maximum product of two elements in an array.
 */

function maxProductOfTwoElements(arr) {
    let max=arr[0]; let secmax=arr[0];
    for(element of arr) {
        if (element > max) {
            secmax = max
            max = element
        } else if (element < max && element > secmax) {
            secmax = element
        } else {
            continue
        }
    }
    return max * secmax
}

console.log(maxProductOfTwoElements([3, 5, -2, 8, 11]))