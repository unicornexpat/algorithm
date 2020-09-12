/**
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a-b);
    let minIndex = 0;
    let maxIndex = nums.length - 1;
    
    while (minIndex < maxIndex) {
        let currentIndex = Math.floor((maxIndex + minIndex) / 2);
        let currentElement = nums[currentIndex];

        if (currentElement > currentIndex) {
        	maxIndex = currentIndex - 1;
        } else {
            minIndex = currentIndex + 1;
        }
    }
    if (minIndex === nums[minIndex]) return ++minIndex;
    return minIndex;
};

const nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));