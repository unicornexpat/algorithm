//O(n)
function arrayOrder(array, indexes) {
  const arrayCoppy = [...array];

  for (let i = 0; i < indexes.length; i++) {
    array[indexes[i]] = arrayCoppy[i];
  }

  return array;
}

const array = [0, 1, 2, 3, 4];
const indexes = [4, 3, 2, 1, 0];

console.log(arrayOrder(array, indexes));