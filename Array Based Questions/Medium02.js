/*
Intersection of Two Arrays
      [1, 2, 3], [2, 3, 4]  → [2,3]
Write a function that returns the common elements between two arrays.
*/

function arrayIntersection(arr1, arr2) {
    let inter = []
    for(element of arr1) {
        if(arr2.includes(element)){
            inter.push(element)
        }
    }
    return inter
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4]))