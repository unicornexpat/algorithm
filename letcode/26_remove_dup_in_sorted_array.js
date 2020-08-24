/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0,0,1,1,1,2,2,3,3,4];
const nums2 = [1,1,2];


var removeDuplicates = function(nums) {

    for (let i = 0; i < nums.length; i++) {
    	while (nums[i] === nums[i+1]){
    		nums.splice(i, 1);
    	}
    }
    return nums;
};

console.log(removeDuplicates(nums2));