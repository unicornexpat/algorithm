/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

const nums = [0,4,4,0,4,4,4,0,2];
const val = 4;

var removeElement = function(nums, val) {
    for (let i = 0; i <= nums.length; ) {
    	if (nums[i] === val) {
    		nums.splice(i, 1);
    	} else {
    		i++;
    	}
    }
    return nums.length;
};

console.log(removeElement(nums, val), nums);