/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
var moveZeroes1 = function(nums) {
	if (!nums || nums.length < 2) return nums;
	let zeroCount = 0;
	let z = 0;
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] != 0) {
    		nums[z] = nums[i];
    		z++;
    	} else {
    		zeroCount++;
    	}
    }
    for (let j = nums.length - 1; zeroCount > 0; j--) {
    	nums[j] = 0;
    	zeroCount--;
    }
    return nums;
};


var moveZeroes = function(nums) {
	if (!nums || nums.length < 2) return nums;
	let z = 0;
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] != 0) {
    		nums[z] = nums[i];
    		nums[i] = i === z ? nums[i] : 0;
    		z++
    	}
    }
    return nums;
};

const nums = [0,1,0,3,12];

console.log(moveZeroes(nums));
