
/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let currentCount = 0;
	let majority;
	let array = [];
    
    for (let i = 0; i < nums.length; i++) {
    	if (array[nums[i]]) array[nums[i]]++;
    	else array[nums[i]] = 1;
    	if (array[nums[i]] > currentCount) {
    		currentCount = array[nums[i]];
    		majority = nums[i];
    	}
    }

    return majority;
};

//faster
var majorityElement2 = function(nums) {
	let currentCount = 0;
	let majority;
	let array = [];
    
    nums.forEach((element) => {
    	if (array[element]) array[element]++;
    	else array[element] = 1;
    	if (array[element] > currentCount) {
    		currentCount = array[element];
    		majority = element;
    	}
    })

    return majority;
};

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement2([2,2,1,1,1,2,2]));