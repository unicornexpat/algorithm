/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
*/

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];
    let map = new Map();
    for (let i = 0; i <= nums.length-4; i++) {
		for (let j = i + 1; j <= nums.length - 3; j++) {
			let low = j + 1;
			let high = nums.length - 1;
			while(low < high) { 
				const dict = `${nums[i]}${nums[j]}${nums[low]}${nums[high]}`;
				const sum = nums[i] + nums[j] + nums[low] + nums[high];
				if (sum > target) {
					--high;
				} else if (sum < target) {
					++low
				} else {
					if (!map.get(dict)) {
						res.push([nums[i], nums[j], nums[low], nums[high]])
						map.set(dict, true);
					}
					++low;
					--high
				}
			}
		}
    }
    return res;
};


const nums2 = [2,2,2,2,2], target2 = 8;
const nums1 = [1,0,-1,0,-2,2], target1 = 0
const nums = [0, 0, 0, 0], target = 0;

// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

console.log(fourSum(nums2, target2));
