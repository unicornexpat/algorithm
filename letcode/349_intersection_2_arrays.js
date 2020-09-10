/**
Given two arrays, write a function to compute their intersection.
 */
var intersection = function(nums1, nums2) {
    const result = [];
    const set1 = new Set(nums1);
    set1.forEach(i => {
    	if (nums2.indexOf(i) !== -1) result.push(i);
    })
    return result;
}

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

console.log(intersection(nums1, nums2));