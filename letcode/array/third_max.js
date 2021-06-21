/*
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
*/
var thirdMax = function(nums) {
	if (!nums) return nums;
    let st = -Infinity;
    let nd = -Infinity;
    let rd = -Infinity;

    for(let i = 0; i < nums.length; i++) {
    	if (nums[i] === st || nums[i] === nd || nums[i] === rd) continue;
    	if (nums[i] > st) {
    		[st, nd, rf] = [nums[i], st, nd];
    	} else if (nums[i] > nd) {
    		[nd, rd] = [nums[i], nd];
    	} else if (nums[i] > rd) {
    		rd = nums[i];
    	}
    }

    return rd === -Infinity ? st : rd;
};

const nums = [2,2,3,1];

console.log(thirdMax(nums));