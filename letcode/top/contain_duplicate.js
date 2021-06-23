/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
*/
var containsDuplicate = function(nums) {
	const set = new Set(nums);
	return nums.length !== [...set].length
};

const nums = [1,5,-2,-4,0];

console.log(containsDuplicate(nums));
