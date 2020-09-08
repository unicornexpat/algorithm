/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
*/

//slowest
var containsDuplicateSlow = function(nums) {
    if (nums.length === 1) return false;
    for (let i = 0; i < nums.length; i++) {
    	if (nums.indexOf(nums[i], i+1) !== -1) return true;
    }
    return false;
};

// Using set fastest

var containsDuplicate = function(nums) {
	const numsSet = new Set(nums);
	return numsSet.size !== nums.length;
}
const nums = [1,2,3,1]; // true
const nums2 = [1,2,3,4]; // false
const nums3 = [1,1,1,3,3,4,3,2,4,2]; // true

console.log(containsDuplicate(nums), containsDuplicate(nums2), containsDuplicate(nums3),)