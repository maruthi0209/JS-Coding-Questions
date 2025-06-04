/*
Count Occurrences of a Character
       "hello world", "l" → 3
Write a function that counts the occurrences of a specific character in a string.
 */

function characterOccurences(string, char) {
    let count = 0
    for(let i=0; i < string.length; i++) {
        if (string.at(i) == char) {
            count++
        }
    }
    return count
}

console.log(characterOccurences("hello world", "l"))