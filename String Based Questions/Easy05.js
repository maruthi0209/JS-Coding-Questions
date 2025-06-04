/* 
Convert String to Title Case
       "hello world" → "Hello World"
Write a function that converts a string to title case (capitalize the first letter of each word).
*/

function convertTitleCase(string) {
    const arr = string.split(" ")
    arr.forEach(element => {
        upperele = element.at(0).toUpperCase() + element.substring(1)
        string = string.replace(element, upperele)
    });
    return string
}

console.log(convertTitleCase("hello world"))