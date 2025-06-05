/*
Check if String is a Valid Number
     "123.45" → true 
Write a function to check if a string is a valid number.
 */

function checkStringValid(string) {
    return ((!isNaN(Number(string)) && typeof Number(string) === 'number')? true : false)
}

console.log(checkStringValid("123.45"))

/**
 * Number(string): This attempts to convert the input string to a number.

    For 'abc', Number('abc') returns NaN (Not a Number) because 'abc' cannot be converted to a valid number.

    typeof Number(string): The typeof operator checks the type of the result of Number(string).

    typeof NaN returns 'number' because, in JavaScript, NaN is technically of type number (a special numeric value).

    Ternary Check: The condition (typeof Number(string) === 'number') evaluates to true because NaN is a number type.

    Thus, the function returns true.

Why This Happens:
    JavaScript considers NaN as a numeric value (a special case of the number type), so typeof NaN is 'number'.

    This is a quirk of JavaScript's type system.

    Fixing the Function:
    If you want to check whether a string is a valid number (e.g., '123' is valid, 'abc' is not), you should also check if the result is NaN.
 */