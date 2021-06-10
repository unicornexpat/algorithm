/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

var removeDuplicates = function(nums) {
    let i = 0;

    for(let j = 1; j < nums.length; j++) {
    	if (nums[i] !== nums[j]) {
    		i++
    		nums[i] = nums[j]
    	}
    }
    return i+1;
};

const nums = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));