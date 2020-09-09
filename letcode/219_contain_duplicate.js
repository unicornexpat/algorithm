/**
Given an array of integers and an integer k,
find out whether there are two distinct indices i and j in the array
such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
 */

//slower but better memory
var containsNearbyDuplicateSlow = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
    	const j = nums.indexOf(nums[i], i + 1);
    	if (j !== -1 && j-i <= k){
    		return true;
    	}
    }
    return false;
};

//fastest using object dictionary
var containsNearbyDuplicate = function(nums, k) {
	const holder = {};
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] in holder && i - holder[nums[i]]  <= k) return true;
    	holder[nums[i]] = i;
    }
    return false;
};

const nums = [1,2,3,1];
const k = 3;
const nums2 = [1,2,3,1,2,3];
const k2 = 2;

console.log(containsNearbyDuplicate(nums, k));
console.log(containsNearbyDuplicate(nums2, k2));
