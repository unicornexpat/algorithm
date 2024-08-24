// 3. Write a function to find the longest common prefix among an array of strings.

const longestCommonPrefix = (arr) => {
	let longest = '';
	arr.sort((a, b) =>  a.length - b.length);
	console.log(arr);
	const firstString = arr[0];

	let left = 0;
	let right = firstString.length - 1;

	while(left < right) {
		const mid = Math.floor((left + right)/2);
		const sub = firstString.substring(0, mid);
		const isCommonPrefix = arr.every(str => str.indexOf(sub) >= 0);
		if (isCommonPrefix) {
			left = mid + 1;
			longest = sub;
		} else {
			right = mid -1;
		}
	}

	return longest;

	// for (let i = 0 ; i < firstString.length; i++) {
	// 	const sub = firstString.substring(0, i+1);
	// 	const isCommonPrefix = arr.every(str => str.indexOf(sub) >= 0);
	// 	if (isCommonPrefix) {
	// 		longest = sub;
	// 	}
	// }
	// return longest;
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); 




