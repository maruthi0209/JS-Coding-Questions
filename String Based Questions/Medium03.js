/*
Find the First Non-Repeating Character
       "swiss" → ‘w’
Write a function to find the first non-repeating character in a string.
 */

function firstNonRepeatingChar(string) {
    let reps = {}
    for(element of string.split('')) {
        if(Object.keys(reps).includes(element)) {
            reps[`${element}`] += 1
        } else {
            reps[`${element}`] = 1
        }
    }
    return Object.keys(reps)[Object.values(reps).indexOf(Object.values(reps).find(val => val == 1))];
}

console.log(firstNonRepeatingChar("swiss"))