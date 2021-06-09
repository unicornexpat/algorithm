/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

var removeElement = function(nums, val) {
    let length = nums.length;
    let i = 0;
    while(i < length) {
    	if (nums[i] === val) {
    		nums[i] = nums[length - 1];
    		length--;
    	} else {
    		i++;
    	}
    }
    return length;
};


const nums = [0,1,2,2,3,0,4,2], val = 2;

console.log(removeElement(nums, val));