/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
var climbStairsDp = function(n) {
	if (!n) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;

	let dp = [0, 1, 2];
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};

var climbStairs = function(n) {
	let cache = new Map();
	const climb = (i) => {
		if (cache.get(i)) return cache.get(i);
		else {
			let res;
			if (i === 0) {
				res = 0;
			} else if (i === 1) {
				res = 1;
			} else if (i === 2) {
				res = 2
			} else {
				res = climb(i-2) + climb(i-1);
			}
			cache.set(i, res);
			return cache.get(i);
		}
	}
	return climb(n);
}

const n = 3;
console.log(climbStairs(n));