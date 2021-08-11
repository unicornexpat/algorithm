/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

Input: n = 27
Output: true
n = 3^i
i = logn(3)
i = ln(n)/ln(3)
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree1 = function(n) {
    return (Math.log(n) / Math.log(3))%1 === 0;
};

var isPowerOfThree = function(n) {
	if (n < 0) return false;
	const maxPower = parseInt(Math.log(2147483647) / Math.log(3));
	const max = Math.pow(3, maxPower);
    return max % n === 0;
};


const n = 27;
console.log(isPowerOfThree(n))