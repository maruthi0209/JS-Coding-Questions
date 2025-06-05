/*
Check if Two Objects are Equal
      {a: 1, b: 2}, {a: 1, b: 2} → true
Write a function to check if two objects are equal (deep comparison).
 */

function deepComparison(o1, o2) {
    return JSON.stringify(o1) === JSON.stringify(o2);
}

console.log(deepComparison({a: 1, b: 2}, {a: 1, b: 2}))