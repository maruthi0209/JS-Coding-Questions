/*
Check if String Contains Only Digits
      "12345" → true 
Write a function to check if a string contains only numeric digits.
*/

function checkForOnlyDigits(string) {
    const regex = /[0-9]/g;
    const res = string.match(regex)
    return (res.length == string.length)? true : false;
}

console.log(checkForOnlyDigits("12345a"))