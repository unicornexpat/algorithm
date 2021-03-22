/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

*/

var climbStairs = function(n) {
	const cache = {};

	const climb = (i) => {
		if (cache[i]) return cache[i];
		else {
			let res;
			if (i === 0) {
				res = 1;
			} else if (i < 0) {
				res = 0;
			} else {
				res = climb(i-2) + climb(i-1);
			}
			cache[i] = res;
			return res;
		}
	}
	return climb(n);
}

console.log(climbStairs(44));