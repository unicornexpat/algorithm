/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
};

/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const res = [];
    for (let i = nums.length - 1; i >=0; i--) {
        let square;
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            square = nums[right];
            right--;
        } else {
            square = nums[left];
            left++;
        }
        res[i] = square*square;
    }
    return res;
};

const nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));

