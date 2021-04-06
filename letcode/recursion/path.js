
const ids = ['1.2.3'];
const path = '1.2.3';
const i = 0;
const processPath = (string, ids) => {
	const arr = [...ids];
	const pop = arr.pop();
	const index = string.indexOf(pop);
	if (index !== -1) {
		return [
		...processPath(string.slice(0, index), arr),
		pop,
		...processPath(string.slice(index+pop.length, string.length), arr)
		]

	} else {
		return [ string ];
	}
}

console.log(processPath(path, ids));