/*
Reverse a String
      "hello" → "olleh"
Write a function to reverse a given string.
*/

function stringReverse(string) {
    let revString = "";
    for(let i=string.length-1; i>=0; i--) {
        revString = revString.concat(string.charAt(i))
    }    
    return revString
}

console.log(stringReverse("hello"))