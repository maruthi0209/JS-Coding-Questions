/*
Sum of Even Numbers
       [1, 2, 3, 4, 5] →  6
Write a function that returns the sum of all even numbers in an array.
 */

function sumOfEvenNumbers(arr) {
    let sum = 0
    for(element of arr) {
        if (element % 2 == 0) {
            sum += element
        }
    }
    return sum
}

console.log(sumOfEvenNumbers([1, 8, 3, 4, 5]))