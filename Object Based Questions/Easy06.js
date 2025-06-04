/*
Check if Object is Empty
        {} → true 
Write a function to check if an object is empty (i.e., has no properties).
 */

function checkEmptyObject(obj) {
    return Object.keys(obj).length == 0? true : false
}

console.log(checkEmptyObject({}))