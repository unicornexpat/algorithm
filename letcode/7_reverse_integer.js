/*
 Reverse digits of an integer.

 Example1: x = 123, return 321
 Example2: x = -123, return -321

 */

function reverseInteger(x) {
    let result;

    if (Math.sign(x) === -1) result = -parseInt(Math.abs(x).toString().split('').reverse().join(''));
    else result = parseInt(x.toString().split('').reverse().join(''));

    if (result > Number.MAX_VALUE || result < Number.MIN_VALUE) return 0;
    return result;
}

console.log(reverseInteger(-123));
console.log(reverseInteger(1));