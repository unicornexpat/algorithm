/*
Given an array consisting of n integers,
find the contiguous subarray of given length k that has the maximum average value.
And you need to output the maximum average value.
*/
const nums = [4,2,1,3,3];
const k = 1;
// var findMaxAverage = function(nums, k) {
// 	let maxAverage = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i <= nums.length; i++) {
//     	let sum = 0;
//     	if (i + k <= nums.length) {
// 	    	for (let j = 0; j < k; j++) {
// 	    		sum += nums[i+j];
// 	    	}
// 	    	maxAverage = Math.max(maxAverage, sum/k);
// 	    }
//     }
//     return maxAverage;
// };

var findMaxAverage = function(nums, k) {
	let maxAverage = Number.NEGATIVE_INFINITY;
	let sum = 0;
    for (let i = 0; i < nums.length; i++) {
    	sum += nums[i];
    	if (i === k - 1) {
    		maxAverage = Math.max(maxAverage, sum/k)
    	} else if (i >= k){
    		sum = sum - nums[i - k];
    		maxAverage = Math.max(maxAverage, sum/k)
    	}
    }
    return maxAverage;
};

console.log(findMaxAverage(nums, k));