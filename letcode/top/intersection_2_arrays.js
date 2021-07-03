/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/
var intersectNoSort = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
    	return intersect(nums2, nums1)
    }

    const map = {};
    for (let i = 0; i < nums1.length; i++) {
    	const el = nums1[i];
    	if (map[el]) {
    		map[el] += 1;
    	} else {
    		map[el] = 1;
    	}

    }

    let k = 0;
    for (let i = 0; i < nums2.length; i++) {
    	const el = nums2[i];
    	if (map[el] > 0) {
    		nums1[k] = el;
    		map[el] -=1;
    		k++;
    	}
    }
    return nums1.splice(0, k);
};

var intersect = function(nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);
	let i = 0;
	let j = 0;
	let k = 0;
	while(i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			++i;
		} else if (nums1[i] > nums2[j]) {
			++j;
		} else {
			nums1[k] = nums1[i];
			++i;
			++j;
			++k;
		}
	}

	return nums1.splice(0, k);
}

const nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
const nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];
console.log(intersect(nums1, nums2));