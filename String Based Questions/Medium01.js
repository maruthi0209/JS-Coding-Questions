/*
Find the Longest Word
       "The quick brown fox jumps over the lazy dog" → "jumps"
Write a function to find the longest word in a string.
 */

function longestWord(string){
    const words = string.split(' ')
    let max = words[0]; 
    for(element of words) {
        if(element.length >= max.length) {
            max = element
        }
    }
    return max
}

const phrase = "The quick brown fox jumps over the lazy dog"
console.log(longestWord(phrase))