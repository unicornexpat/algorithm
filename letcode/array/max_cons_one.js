/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;
    let prev;
    for(let i = 0; i < nums.length; i++) {
    	if (nums[i] === 1 && prev === 1) {
    		currentCount++;
    	} else if (nums[i] === 1) {
    		currentCount = 1;
    	} else {
    		currentCount = 0;
    	}
    	prev = nums[i];
    	maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
};

const nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));
