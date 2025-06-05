/*
Check for Anagrams
       "listen", "silent"  → true
Write a function to check if two strings are anagrams of each other.
 */

function checkAnagram(str1, str2) {
    let count = 0;
    for(element of str2.split('')) {
        if(str1.includes(element)) {
            count++;
        }
    }
    return (count == str1.length)? true : false;
    
}

console.log(checkAnagram("listen", "silent"))