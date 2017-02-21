/*
 Un sorted array. Sum of 2 elements of an array to make up the target.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//2 loops, not dorted array. Modified original array.
var twoSumWhile = function (nums, target) {
    let currentElement;
    let index;
    let count = 0;
    while (nums.length) {
        currentElement = nums[0];
        nums.splice(0, 1);
        index = nums.indexOf(target - currentElement);
        if (index !== -1) return [count, index + ++count];
        count++;
    }
};

//fastest
var twoSum = function(nums, target) {
    let map = [];

    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] != null) return [map[target - nums[i]], i];
        else map[nums[i]] = i;
    }
};




//use binary search
console.log(twoSum([3, 3], 6));
