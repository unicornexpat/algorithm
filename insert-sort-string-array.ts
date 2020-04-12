// Sort an array of strings according to string lengths

const arr = ['a', 'ab', 'abcdef', 'b'];

function sort(arr, left = 0, pivot = arr.length - 1) {
	while (left < pivot) {
		for (let i = left; i < pivot; i++) {
			if (arr[i].length <= arr[pivot].length) {
				swap(arr, left, i)
				left++
			}
		}
		swap(arr, left, pivot);

		sort(arr, 0, left - 1);
		sort(arr, left + 1, pivot);
	}

	return arr;
}

function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

console.log(sort(arr));