// Write a function that calculates the sum of three numbers. Use call and apply to invoke it with an object representing a set of numbers.

// Input: Object { a: 1, b: 2, c: 3 }
// Expected Output: 6
function sum(a,b,c) {
    return a + b + c;
}
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const usingcall = sum.call(obj, obj.a, obj.b, obj.c)
console.log(usingcall)
const usingapply = sum.apply(obj,[obj.a, obj.b, obj.c])
console.log(usingapply)
