/*
The set S originally contains numbers from 1 to n.
But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set,
which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error.
Your task is to firstly find the number occurs twice and then find the number that is missing.
Return them in the form of an array.
*/

var findErrorNums = function(nums) {
    const result = [0, 1];

    // sort the array.
    nums.sort((a, b) => a - b);

    for( let i = 1; i < nums.length; i++) {
    	if (nums[i] === nums[i-1]) { // recort incorrect num
    		result[0] = nums[i];
    	} else if (nums[i] > nums[i - 1] + 1) { // correct the num
    		result[1] = nums[i - 1] + 1;
    	}
    }

    if(nums[nums.length - 1] !== nums.length) {
        result[1] = nums.length;
    }
    
    return result;
};

const nums = [3,2,3,4,6,5];

console.log(findErrorNums(nums));