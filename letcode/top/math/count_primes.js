/*
Count the number of prime numbers less than a non-negative number, n.
*/

/*
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) {
    	return 0;
    }
    let track = [];
    let prime = 0;

    for(let i = 2; i <= Math.sqrt(n); i++) {
    	if (!track[i]) {
    		for (j = i*i; j < n; j +=i){
    			track[j] = true;
    		}
    	}
    }
    for(let i = 2; i < n; i++) {
    	if (!track[i]) {
    		prime++;
    	}
    }

    return prime;
};

const n = 10;

console.log(countPrimes(10));