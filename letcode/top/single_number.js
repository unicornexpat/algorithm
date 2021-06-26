/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
*/

// Math 2*(a + b + c) - (a + a + b + b + c) = c
var singleNumber1 = function(nums) {
    const set = new Set(nums);
    return [...set].reduce((acc, curr) => acc + curr, 0)*2
    - nums.reduce((acc, curr) => acc + curr, 0);
};

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}

const nums = [5,2,5,2,1];
console.log(singleNumber(nums));