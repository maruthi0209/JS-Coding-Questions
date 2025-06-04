/* 
Count Vowels in a String
       "hello world" → 3
Write a function to count the number of vowels in a given string.
*/

function countVowels(string) {
    let vowels = ['a','e','i','o','u']
    let count = 0;
    for(element of string) {
        if(vowels.includes(element)) {
            count += 1;
        }
    }
    return count
}

console.log(countVowels("hello world"))