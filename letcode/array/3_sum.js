/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/
var threeSum = function(numbers) {
    let res = [];
    numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length && numbers[i] <= 0; i++) {
        if (numbers[i] === 0 || numbers[i-1] !== numbers[i]){
        	let low = i+1;
        	let high = numbers.length - 1;
        	while(low < high) {
        		const sum = numbers[i] + numbers[low] + numbers[high];
        		if (sum < 0) {
        			++low;
        		} else if (sum > 0) {
        			--high;
        		} else {
        			res.push([numbers[i], numbers[low++], numbers[high--]]);
                    while(low < high && numbers[low -1] === numbers[low]) {
                        ++low;
                    }
        		}
        	}
        }
    }
    return res;
};


const nums = [-1,0,1,2,-1,-4];

//Output: [[-1,-1,2],[-1,0,1]]

console.log(threeSum(nums));