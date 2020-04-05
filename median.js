const array = [1, 3, 7, 8];
const secondArray = [2, 7, 10, 11];

// median
function median(array1, array2) {
	const array = [];
	const isOdd = !!((array1.length + array2.length) % 2);
	const half = Math.floor((array1.length + array2.length)/2);
	let prev, current;
	for (let i = 0, i1 = 0, i2 = 0; i <= half; i++){
		prev = current;
		if (i1 < array1.length && i2<array2.length){
			if (array1[i1] < array2[i2]){
				current = array1[i1++];
			} else {
				current = array2[i2++]
			}
		} else if (i1 < array1.length) {
			curent = array1[i1++];
		} else if (i2 < array2.length) {
			current = array2[i2++];
		}
		array.push(current);
	}

	console.log(array, prev, current);

	if (array.length % 2 === 0) {
		return current;
	} else {
		console.log('HERE');
		return (current + prev) / 2
	}
}

console.log(median(array, secondArray));