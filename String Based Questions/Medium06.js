/*
Reverse Words in a String
      "hello world" → "world hello"
Write a function to reverse the order of words in a given string.
 */

function reverseWords(string) {
    let words = string.split(" ")
    let rev = ""
    for(let i=words.length-1; i>=0; i--){
        rev = rev.concat(words[i], " ")
    }
    return rev
}

console.log(reverseWords("hello world"))