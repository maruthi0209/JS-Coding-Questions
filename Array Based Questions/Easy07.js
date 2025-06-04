/*
 Remove Falsy Values
      [0, 1, false, 2, '', 3] → [1, 2, 3]
Write a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array. 
 */

function removeFalse(arr) {
    for(element of arr) {
        if(!element){
            arr.splice(arr.indexOf(element), 1)
        }
    }
    return arr;
}

console.log(removeFalse([0, 1, false, 2, '', 3]))