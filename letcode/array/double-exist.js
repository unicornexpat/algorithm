/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
*/

var checkIfExist = function(arr) {
    const set = new Set();
    for (let i of arr) {
    	if (set.has(i)) {
    		return true;
    	}
    	set.add(i/2);
    	set.add(2*i);
    }
    return false;
};

const arr = [10,2,5,3];
console.log(checkIfExist(arr));