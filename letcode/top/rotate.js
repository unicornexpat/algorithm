/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

var rotate = function(nums, n) {
	let k = n % nums.length;
	let count = 0;
	for(let start = 0; count < nums.length; start++) {
		let current = start;
		let prev = nums[start];
		do {
			let next = (current + k) % nums.length;
			let temp = nums[next];
			nums[next] = prev;
			prev = temp;
			current = next;
			count++;

		} while (start != current);
	}
	return nums;
};



const nums = [1,2,3,4,5,6,7], k = 3;

console.log(rotate(nums, k));