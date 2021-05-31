/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	let possibleDups = 0;
	let length_ = arr.length - 1;
	for (let left = 0; left <= length_ - possibleDups; left++ ) {
		if (arr[left] == 0) {
			if (left == length_ - possibleDups) {
				arr[length_] = 0;
				length_--;
				break;
			}
			possibleDups++;
		}
	}
	let last = length_- possibleDups;
	for (let i = last; i>=0; i--) {
		if (arr[i] === 0) {
			arr[i + possibleDups] = 0;
			possibleDups--;
			arr[i + possibleDups] = 0; 
		} else {
			arr[i + possibleDups] = arr[i];
		}
	}
};

const test = [1,0,2,3,0,4,5,0]; // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros(test));