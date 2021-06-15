/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
*/

var validMountainArray = function(arr) {
	if (arr.length < 3) return false;
	let reverse = false;;
	let upHill = true;
	for (let i = 0; i < arr.length -1; i++ ) {
		if (arr[i] == arr[i+1]) return false;
		if (upHill) {
			if (arr[i] > arr[i+1]) {
				if (!reverse && i > 0) {
					reverse = true;
					upHill = false;
				} else {
					return false;
				}
			}
		} else if (arr[i] < arr[i+1]) {
			return false;
		}
	}
	return reverse && !upHill;
};

const arr = [0,1,2,3,4,5,6,7,8,9];

console.log(validMountainArray(arr));
