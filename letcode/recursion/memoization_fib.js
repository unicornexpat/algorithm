/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

var fib = function(n) {
	const cache = {};

	const fibonacci = (i) => {
		if (cache[i]) return cache[i];
		else {
			let res;
			if (i < 2) {
				res = i;
			} else {
				res = fibonacci(i-2) + fibonacci(i-1);
			}
			cache[i] = res;
			return res;
		}
	}
	return fibonacci(n);
};

console.log(fib(4));