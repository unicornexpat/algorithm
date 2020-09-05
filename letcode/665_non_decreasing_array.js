/**
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 */

const nums = [4,2,3]; // true
const nums2 = [-1,4,2,3]; // true
const nums3 = [4, 2, 1]; // false


var checkPossibility = function(nums) {
	const isSorted = () => nums.every((_, i) => !i || nums[i-1] <= nums[i]);

	for (let i = 1; i < nums.length; ++i) {
		if (nums[i-1] <= nums[i]) continue;
		let temp = nums[i-1];
		nums[i-1] = nums[i];
		if (isSorted()) return true;
		nums[i-1] = nums[i] = temp;
		if (isSorted()) return true;
		return false;
	}

    return true;
};

console.log(checkPossibility(nums), checkPossibility(nums2), checkPossibility(nums3));
