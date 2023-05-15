

const insertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let j = i;
		while(j > 0, array[j - 1] > array[j]) {
			let temp = array[j];
			array[j] = array[j-1]
			array[j-1] = temp;
			j -=1;
		}
	}
	return array;

}

const nums = [1, 0, 5, 6, 6, 2, 3, 10, 23];
console.log(insertionSort(nums));