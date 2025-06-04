/*
Check if a String is a Palindrome
      "racecar"  → true 
Write a function to check if a given string is a palindrome.
 */

function palindrome(string) {
    let reverse = '';
    for(let i=string.length-1; i>=0; i--){
        reverse = reverse.concat(string.charAt(i))
    }
    return (string === reverse)? true : false ;
}

console.log(palindrome("racecar"))