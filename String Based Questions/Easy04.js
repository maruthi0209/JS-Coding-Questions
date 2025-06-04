/* 
Remove Vowels from a String
       "hello world" → "hll wrld"
Write a function to remove all vowels from a given string.
*/

function removeVowels(string) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    for(element of string) {
        if(vowels.includes(element)) {
            string = string.replace(element, '')
        }
    }
    return string
}

console.log(removeVowels("hello world"))