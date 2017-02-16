/*
 Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

 Your algorithm's runtime complexity must be in the order of O(log n).

 If the target is not found in the array, return [-1, -1].

 For example,
 Given [5, 7, 7, 8, 8, 10] and target value 8,
 return [3, 4].

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {

    let minIndex = 0;
    let maxIndex = nums.length - 1;
    let currentIndex;
    let currentElement;
    let array = [-1, -1];

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2 );
        currentElement = nums[currentIndex];

        if (currentElement < target) {
            minIndex = currentIndex + 1;
        } else if (currentElement > target) {
            maxIndex = currentIndex - 1;
        } else {
            array.fill(currentIndex);
            let temp = currentIndex;
            while (temp <= maxIndex) {
                if (nums[temp] === target) array[1] = temp;
                else break;
                temp++;
            }
            while (currentIndex >= minIndex) {
                if (nums[currentIndex] === target) array[0] = currentIndex;
                else break;
                currentIndex--;
            }
            break;
        }
    }

    return array;
}

function searchRange(nums, target) {
    let start = nums.indexOf(target);

    if (start === -1) return [-1, -1];
    let array = [];
    array[0] = start;

    let minIndex = start;
    let maxIndex = nums.length - 1;

    function index(nums, minIndex, maxIndex, target) {
        let currentIndex = Math.floor((minIndex + maxIndex) / 2);
        let currentElement = nums[currentIndex];

        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = nums[currentIndex];

            if (currentElement < target) {
                minIndex = currentIndex + 1;
            } else if (currentElement > target) {
                maxIndex = currentIndex - 1;
            } else if (currentElement ==){
                index(nums, currentIndex, maxIndex, target);
            }
            return currentIndex;
        }
    }

    if (index(nums, minIndex, maxIndex, target)) index


    return array;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));