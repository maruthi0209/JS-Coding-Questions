/*
Sum of All Elements
       [1, 2, 3, 4] → 10 
Write a function that returns the sum of all elements in an array.
*/

function sumOfAllElements(arr) {
    let sum = 0;
    for(element of arr) {
        sum += element;
    }
    return sum
}

console.log(sumOfAllElements([1, 20, 3, 4]))