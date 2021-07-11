/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
*/
var reverse = function(x) {
    let revert = 0;
    const isNegative = x < 0;

    if (isNegative) {
        x = -x;
    }

    for (let i = x; i; i = Math.trunc(i / 10)) {
        revert = revert * 10 + i % 10
    }

    if (revert >= 2**31) {
        return 0;
    }

    return isNegative ? -revert : revert
};

const x = 123;

console.log(reverse(x));