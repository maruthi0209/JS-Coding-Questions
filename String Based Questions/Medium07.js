/*
String Compression
       "aabcccccaaa" → "a2b1c5a3"
Write a function to perform basic string compression using the counts of repeated characters (e.g., aabcccccaaa becomes a2b1c5a3).
 */

function stringCompress(string) {
    let chars = string.split('')
    let comp = string.at(0);
    let count = 1;
    for(let i=1; i<chars.length; i++) {
        if(chars[i] == chars[i-1]) {
            count++;
        } else {
            comp = comp.concat(count, chars[i])
            count = 1;
        }
    }
    comp = comp.concat(count)
    return comp
}

console.log(stringCompress("aabcccccaaa"))