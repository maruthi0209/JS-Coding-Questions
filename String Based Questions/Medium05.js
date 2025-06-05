/*
Check if a String is a Rotation of Another String
      "abcde", "cdeab" → true
Write a function to check if one string is a rotation of another string.
 */

function checkRotation(str1, str2) {
    let rotation = true;
    for(let i=1; i<str2.length-1; i++) {
        if(str1.includes(str2.substring(0, i)) && str1.includes(str2.substring(i, str2.length))) {
            rotation = true
        } else {
            rotation = false
        }
    }
    return rotation;
}

console.log(checkRotation("abcde", "cdeab"))