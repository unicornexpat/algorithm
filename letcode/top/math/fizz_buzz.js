/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.


Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz1 = function(n) {
	if (!n) return [];
	let res = [];
    for (let i = 1; i <= n; i++) {
    	if (i%3 ===0 && i%5===0) {
    		res.push('FizzBuzz')
    	} else if (i%3===0) {
    		res.push('Fizz');
    	} else if (i%5===0) {
    		res.push('Buzz');
    	} else {
    		res.push(`${i}`);
    	}
    }
    return res;
};

var fizzBuzz = function(n) {
	if (!n) return [];
	let res = [];
	let i = 3;
	let j = 5;

	while (i <= n) {
		res[i-1] = 'Fizz';
		i = i + 3;
	}

	while (j <= n) {
		res[j-1] = res[j-1] ? 'FizzBuzz' : 'Buzz';
		j = j+5;
	}

	for (let i = 0; i < n; i++) {
		if (!res[i]) {
			res[i] = `${i+1}`;
		}
	}

	return res;
}

const n = 15;
console.log(fizzBuzz(n));