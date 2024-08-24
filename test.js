
const accum = (arr) => {
	return arr.reduce((accum, value) => {
		return accum + value;
	}, 0);
}

// console.log(accum([1, 2, 3]));


// 1. sum all params in function

const sumAllParams = (...args) => {
	return args.reduce((accum, value) => accum+value, 0);
}


const person = {
    name: "Alice",
    greet: function(greeting) {
        console.log(greeting + ", " + this.name);
    },
    num: 3,
    accum: (...args) => {
    	console.log(this);
    	console.log(args.reduce((ac, value) => ac+value), 0)
    } 
};

// person.greet("Hello"); // Direct call, this refers to person object, logs "Hello, Alice"

// const otherPerson = { name: "Bob", num: 1000};
// person.greet.apply(otherPerson, ["Hi", 'again']); // Using call, this refers to otherPerson, logs "Hi, Bob"

// person.accum.apply(otherPerson, [1, 2, 3]); // Using call, this refers to otherPerson, logs "Hi, Bob"


const cache = (func) => {
	const map = new Map();

	return (...args) => {
		const key = JSON.stringify(args);

		if (map.has(key)) {
			console.log('hit');
			return map.get(key);
		} else {
			console.log('miss');
			const res = func(...args);
			map.set(key, res);
			return res;
		}
	}
}

const cachedSum = cache(sumAllParams);

// console.log(cachedSum(1, 2, 3));
// console.log(cachedSum(1, 2, 3));

const debounce = (func, wait) => {

	let timer;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, wait);
	}
}

// const debunceCachedSum = debounce(cachedSum, 3);

// console.log(debunceCachedSum(1, 2, 3));


// To find the largest number in a nested array in JavaScript

const findLargestNumber = (arr) => {
	let max = -Infinity;

	const find = (elements) => {
		for (el of elements) {
			if (Array.isArray(el)) {
				find(el);
			} else if (typeof el === 'number') {
				max = Math.max(max, el);
			}
		}
	}

	find(arr);
	return max;
}

// let nestedArray = [1, [2, 3, [4, 5]], [6, [7, [8]], 9], 10];
// console.log(findLargestNumber(nestedArray)); // Output: 10


//Write a JavaScript function to check if a given number is prime. 

const isPrime = (n) => {
	if (n <= 1) return false;
	if (n <= 3) return true;

	if (n % 2 == 0 || n % 3 == 0) return false;

	for(let i = 5; i <= Math.sqrt(n); i++) {
		if (n % i == 0) return false;
	}

	return true;
}

// console.log(isPrime(21));

// Write a JavaScript function that returns the Fibonacci
// sequence up to a given number of terms. 
const fibonacciSequence = (n) => {

	if ( n <= 0) return [];
	if ( n === 1) return [0];

	const res = [0, 1];

	while(res.length < n) {
		const next = res[res.length-2] + res[res.length-1];
		res.push(next);
	}

	return res;

}

// console.log(fibonacciSequence(12));

//10. Write a JavaScript program to convert a string
// to title case (capitalize the first letter of each word). 

const capitalize = (str) => {
	return str.split(' ').map(word => {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}).join(' ');
}

// console.log(capitalize('ETHAN ngUYen'));


// 11. Debounce function

const debounce1 = (func, delay) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => func(...args), delay);
	}
}

const test = () => console.log('test');

const testDebounced = debounce1(test, 2000);

// testDebounced();


// 2. Write a function that takes an array of objects and a key,
// and returns a new array sorted based on the values of that key in ascending order.
// Ask whether the origional array can be mutated or not

const sortObjects = (arr, key) => {
	return arr.sort((a, b) => a[key] - b[key]);
}

// Example usage:
const objectsArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

// console.log(sortObjects(objectsArray, 'age'));


// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object
// or array without any reference to the original. 

const deepClone = (obj) => {
	if (!obj || typeof obj !== 'object') {
		return obj;
	}

	if (Array.isArray(obj)) {
		const arrayCopy = [];

		for (let element of obj) {
			arrayCopy.push(deepClone(element));
		}
		return arrayCopy
	}

	const objectCopy = {};
	for (let key in obj) {
		objectCopy[key] = deepClone(obj[key]);
	}
	return objectCopy;
}

// Example usage:
const originalObject = {
    a: 1,
    b: [2, 3, { d: 4 }],
    c: { e: 5, f: [6, 7] }
};

const clonedObject = deepClone(originalObject);
// console.log(clonedObject);
// Output: { a: 1, b: [ 2, 3, { d: 4 } ], c: { e: 5, f: [ 6, 7 ] } }

clonedObject.b[2].d = 42;
// console.log(originalObject.b[2].d); 


// 4. Write a recursive function to calculate the factorial of a given number, given a specific factorial.
 
const factor = (n, k) => {
	if (k == 0) return 1;
	if ( k == 1) return n;	
	return n*factor(n, k-1);
}

// console.log(factor(4, 3));

// 5. Implement a function that takes two sorted arrays and
// merges them into a single sorted array without using any built-in sorting functions.

const mergeTwoSorted = (array1, array2) => {
	const res = [];
	let pointer1 = 0;
	let pointer2 = 0;
	while (pointer1 < array1.length && pointer2 < array2.length) {
		if (array1[pointer1] < array2[pointer2]) {
			res.push(array1[pointer1]);
			++pointer1;
		} else {
			res.push(array2[pointer2]);
			++pointer2;
		}
	}
	pointer1 < array1.length
	? res.push(...array1.slice(pointer1))
	: res.push(...array2.slice(pointer2))
	return res;
}

const arr1 = [1, 2, 5, 7, 9];
const arr2 = [3, 4, 6, 8];

// console.log(mergeTwoSorted(arr1, arr2));

// Given an array of integers, write a function to find the two numbers that add up to a specific target number.

const findTwoElements =  (arr, target) => {
	const map = new Map();

	for(let el of arr) {
		const remain = target - el;
		if (map.has(remain)) {
			return [map.get(remain), el];
		}
		else {
			map.set(el, el);
		}
	}
}

// console.log(findTwoElements(arr1, 7));


// How would you implement a debounce function in JavaScript? Why might you need this functionality?
// Answer: this function is useful to limit the function call to single time in a given period.
// forexample: to check spelling grama as user type in the form
const debounce2 = (func, delay) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => func(...arg), delay);
	}
}

// Write a function to reverse a linked list. Assume you are given a singly linked list node. How would you approach this problem?

const reverseList = (head) => {
    let currentNode = head;
    let prevNode = null;

    while(currentNode) {
    	const temp = currentNode.next;
    	currentNode.next = prevNode;
    	prevNode = currentNode;
    	currentNode = temp;
    }
    return prevNode;
};

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string.

function longestCommonPrefix(strs) {
	let longest = '';
	const firstString = strs[0];
    for (let i = 0; i < firstString.length; i++) {
    	const c = firstString.substring(0, i+1);
    	if (strs.every((str) => str.indexOf(c) >= 0)) {
    		longest = c;
    	}
    }
    return longest;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); 


/* 
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.   

Determine if you are able to reach the last index.   
*/

const reach = (arr) => {
	let i = 0;
	while(i < arr.length) {
		const el = arr[i];
		let max = 0;
		let j = i;
		while(j < el+i) {
			max = Math.max(arr[j], max);
			++j;
		}
		i = j;
	}

	return i >= arr.length;
};


const maxReach = (arr) => {
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		if(i > max) {
			return false;
		}
		max = math.max(max, i + nums[i]);
	}
	return true;
}

const nums = [2,3,1,1,4];

// console.log(reach(nums));

// Given a sorted array of integers, find the first and last position of a given target value.

const findTarget = (arr, target) => {
	let left = 0;
	let right = arr.length -1;

	let leftIndex = -1;

	while(left <= right) {
		const mid = Math.floor((left + right)/2);
		const el = arr[mid];
		if (el == target) {
			leftIndex = mid;
			right = mid -1;
		} else if (el < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	if (leftIndex == -1) return [-1, 1];

	let rightIndex = leftIndex;
	right = arr.length -1;

	while(left <= right) {
		const mid = Math.floor((left + right)/2);
		const el = arr[mid];
		if (el == target) {
			rightIndex = mid;
			left = mid +1;
		} else if (el < target) {
			left = mid + 1;
		} else {
			right = mid -1;
		}
	}


	return [leftIndex, rightIndex];
}

// const nums1 = [5,7,7,8,8,10];
// const target = 8;

// console.log(findTarget(nums1, target));

// Given a string s, find the length of the longest substring without repeating characters.

const longestSubstring = (str) => {
	const map = new Map();

	let left = 0;
	let right = 0;

	let max = 0;

	while(right < str.length) {
		const c = str[right];
		if(map.has(c)) {
			left = map.get(c);
		}
		max = Math.max(max, right - left + 1);
		map.set(c, right + 1);
		++right;
	}

	return max;
}

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

const longestIncreased = (arr) => {
	let max = 0;

	let left = 0;
	let right = 0;

	while(right < arr.length) {
		
	}
}































