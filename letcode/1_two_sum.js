/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//2 loops
var twoSum = function(nums, target) {
    let tmp;
    let count = 0;
    while (nums.length) {
        console.log(nums);
        tmp = nums.indexOf(target - nums[0]);
        if (tmp !== -1) {
            return [count,tmp + count];
        }
        nums.splice(0, 1);
        count++;
    }
};




//use binary search
console.log(twoSum([3,2,4], 6));
