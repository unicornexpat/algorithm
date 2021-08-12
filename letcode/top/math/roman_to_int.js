/**
 * @param {string} s
 * @return {number}
 */
var romanToInt1 = function(s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let res = 0;
	let i = 0;
	while (i < s.length) {
		const current = map[s[i]];
		const next = map[s[i+1]] || 0;
		if (current >= next) {
			res += current;
		} else {
			res += next - current;
			i++;
		}
		i++;
	}
	return res;
};

var romanToInt = function(s) {
	if (!s || !s.length) return 0

	const map = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000]
		]);
	let i = s.length-1;
	let res = map.get(s[i]);
	while (i > 0) {
		const current = map.get(s[i]) || 0;
		const next = map.get(s[i-1]) || 0;
		if (next >= current) {
			res += next;
		} else {
			res -= next;
		}
		i--
	}
	return res;
}

/*
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

const s = "MCMXCIV";
console.log(romanToInt(s));