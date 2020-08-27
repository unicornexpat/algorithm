/**
Given an integer array nums, find the contiguous subarray
(containing at least one number) which has the largest sum and return its sum.
 */
var maxSubArray = function(nums) {
    let prev = 0;
    let max = Number.NEGATIVE_INFINITY;

    for (let i of nums) {
    	prev = Math.max(prev + i, i);
    	max = Math.max(max, prev);
    }

    return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));