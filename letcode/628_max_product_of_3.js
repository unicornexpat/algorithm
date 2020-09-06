/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.

*/

var maximumProduct = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);

    const l = nums.length;
    return Math.max(nums[l-1]*nums[l-2]*nums[l-3], nums[l-1]*nums[0]*nums[1]);
};

const nums = [1,2,3];
const nums2 = [1,2,3,4];
const nums3 = [-4,-3,-2,-1,60];

console.log(maximumProduct(nums), maximumProduct(nums2), maximumProduct(nums3));