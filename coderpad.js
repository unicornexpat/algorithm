//Deep flatten - Recursively
const flatten = (deep, flat = [], level = false) => {
  if (deep.length === 0) return flat;

  let [head, ...tail] = deep;

  if (level === 0) {
  	return deep;
  } else if (!Array.isArray(head)) {
  	return flatten(tail, flat.concat(head), level);
  }
  else return flatten(tail, flat.concat(flatten(head, [], level ? level -1 : false)), level);
};

const ex = [1, 2, [3, [true, false, ['a', 'b']], 4], 5];

console.log(flatten(ex, [], 4));