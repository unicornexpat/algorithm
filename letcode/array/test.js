/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = (arr) => {
	let i = 0;
	while(i < arr.length) {
		if(arr[i] === 0) {
			
		}
	}
	return arr;
}


const test = [1,0,2,3,0,4,5,0]; // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros(test));