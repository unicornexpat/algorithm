/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

var merge = function(nums1, m, nums2, n) {
	let p1 = m - 1;
	let p2 = n - 1;
	for (let p = m + n - 1; p >= 0; p--) {
		if (p2 < 0) {
			break;
		}

		if (p1 >= 0 && nums1[p1] > nums2[p2]) {
			nums1[p] = nums1[p1--];
		} else {
			nums1[p] = nums2[p2--];
		}
	}
	return nums1;  
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

console.log(merge(nums1, m, nums2, n));