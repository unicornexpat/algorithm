/*
Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/
var twoSum = function(numbers, target) {
	let low = 0;
	let high = numbers.length - 1;
	while(low < high) {
		const sum = numbers[low] + numbers[high];
		if (sum < target) {
			++low;
		} else if (sum > target) {
			--high;
		} else {
			return [low+1, high+1];
		}
	}
};
const numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers, target));