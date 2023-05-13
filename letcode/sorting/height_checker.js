/*
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sort = [...heights];
    for (let i = 0; i < sort.length; i++) {
    	for (let j = i +1; j < sort.length; j++) {
    		if (sort[i] >= sort[j]) {
    			let temp = sort[i];
    			sort[i] = sort[j];
    			sort[j] = temp;
    		}
    	}
    }
    let diff =0;
    for (let z = 0; z < heights.length; z++) {
    	if (heights[z] !== sort[z]) {
    		diff++
    	}
    }
    console.log(sort)
    return diff;
};

const heights = [5,1,2,3,4];
console.log(heightChecker(heights));