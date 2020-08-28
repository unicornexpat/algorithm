/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/
const nums = [1,2,3,4,5,6,7];
const k = 3;
var rotate = function(nums, k) {
    const t = k % nums.length;

    let array = [...nums];

    for (let i = 0; i< nums.length; i++) {
    	nums[(i+t) % nums.length] = array[i]
    }

    return nums;
};

console.log(rotate(nums, k));
