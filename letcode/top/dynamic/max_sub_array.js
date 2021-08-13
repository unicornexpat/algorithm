/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function(nums) {
	if (!nums || !nums.length) return nums;
    let max = nums[0];
    let currentArray = nums[0];
    for (let i = 1; i < nums.length; i++) {
    	const num = nums[i];
    	currentArray = Math.max(num, currentArray + num);
    	max = Math.max(currentArray, max);
    }
    return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));