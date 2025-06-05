/*
Sum of Values by Key
      [{a: 1}, {a: 2}, {a: 3}], "a" → 6
Write a function that sums the values of a specific key across an array of objects.
 */

function sumKeyValue(arr, key) {
    let sum = 0;
    for(element of arr) {
        if(Object.hasOwn(element, key)) {
            sum += element[`${key}`]
        }
    }
    return sum
}

console.log(sumKeyValue([{a: 1}, {a: 2}, {a: 3}], "a"))