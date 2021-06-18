/*
Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/
var sortArrayByParity1 = function(nums) {
	if (!nums || nums.length < 2) return nums;
    let j = nums.length - 1;
    for (let i = 0; i <= j; i++) {
    	const current = nums[i];
    	if (current % 2 == 1) {
    		let stop = false;
    		while(j>i && !stop) {
	    		if (nums[j] % 2 !== 1) {
	    			nums[i] = nums[j];
	    			nums[j] = current;
	    			stop = true;
	    		}
	    		console.log(nums)
	    		j--;
    		}
    	}
    }
    return nums;
};


var sortArrayByParity = function(nums) {
	if (!nums || nums.length < 2) return nums;
	let i = 0;
    let j = nums.length - 1;
    while( i < j) {
    	if (nums[i] % 2 > nums[j] % 2) {
    		const holder = nums[i];
    		nums[i] = nums[j]
    		nums[j] = holder;
    	}
    	if (nums[i] % 2 === 0) i++;
    	if (nums[j] % 2 === 1) j--;
    }
    return nums;
};

const nums = [1, 3];

console.log(sortArrayByParity(nums));
