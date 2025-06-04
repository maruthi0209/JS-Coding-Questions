/*
 Find Unique Elements
       [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]
Write a function to find the unique elements in an array (elements that appear only once). 
 */

function uniqueElement(arr) {
    let uniq = []
    for (element of arr) {
        if(!uniq.includes(element)) {
            uniq.push(element)
        } else {
            uniq.splice(uniq.indexOf(element), 1)
        }
    }
    return uniq
}

console.log(uniqueElement([1, 2, 2, 3, 4, 4, 5]))