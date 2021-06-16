/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
[ 18, 18, 6, 6, 6, -1 ]
*/
var replaceElements1 = function(arr) {
	let greatest = arr[arr.length - 1];
    for (let i = arr.length - 1 ; i >= 0; i--) {
    	if (i === arr.length - 1) {
    		arr[i] = -1;
    	} else {
    		const current = arr[i];
    		arr[i] = greatest;
    		greatest = Math.max(current, greatest);
    	}
    }
    return arr;
};

var replaceElements = function(arr) {
	let greatest = -1;
    for (let i = arr.length - 1 ; i >= 0; i--) {
    	const current = arr[i];
    	arr[i] = greatest;
    	if (current > greatest) greatest = current;
    }
    return arr;
};


const arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));
