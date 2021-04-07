/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
    	x = 1/x;
    	n = -n;
    }
    const fastPow = (j, m) => {
    	console.log(j, m);
    	if (m === 0) return 1;
    	const half = fastPow(j, Math.floor(m/2))
    	if (m % 2 === 0) {
    		return half*half;
    	} else return half*half*j;
    }
    return fastPow(x, n);
};

console.log(myPow(2, 10));

