/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/
var findDisappearedNumbers = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
    	const index = Math.abs(nums[i]) - 1;
    	if (nums[index] > 0) {
    		nums[index] *= -1;
    	}
    }

    for (let i = 1; i <= nums.length; i++) {
    	if (nums[i - 1] > 0) {
    		res.push(i);
    	}
    }
    return res;
};

const nums = [1,1];
console.log(findDisappearedNumbers(nums));