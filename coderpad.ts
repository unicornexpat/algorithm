//Given an array of random numbers, Push all the zero’s of a given array to the end of the array

const arr = [ 1, 2, 0, 4, 3, 0, 5, 0 ];

function sort(arr) {
	const length = arr.length;
	let count = 0;
	let sortArray = [];

	for (let i in arr) {
		if (arr[i] !== 0) {
			sortArray.splice(i - count, 0, arr[i]);
		} else {
			sortArray.push(arr[i]);
			count++;
		}
	}
	return sortArray;
}

console.log(sort(arr));

// Given an array of random numbers, Push all the zero’s of a given array to the begin of the array

const arr2 = [ 1, 2, 0, 4, 3, 0, 5, 0 ];

function sortTop(arr) {
	const length = arr.length;
	let count = 0;
	let sortArray = [];

	for (let i in arr) {
		if (arr[i] !== 0) {
			sortArray.splice(count + i, 0, arr[i]);
		} else {
			sortArray.splice(0, 0, arr[i]);
			// or 
			// sortArray.unshift(arr[i]);
			count++;
		}
	}
	return sortArray;
}

console.log(sortTop(arr2));