//Flatten an array

//LOOP - Fastest
const flattened = [];
for (let i = 0; i < input.length; ++i) {
  for (let j = 0; j < input.length; ++j)
    flattened.push(input[i][j]);
}

//CONCAT APPLY - Slower
const flattened = Array.prototype.concat.apply([], input);

//REDUCED - Slowest
let flattened = input.reduce(function(a, b) {
  return a.concat(b);
}, []);

//Deep flatten - Recursively
const flatten = (deep, flat = []) => {
  if (deep.length === 0) return flat;

  let [head, ...tail] = deep;

  if (!Array.isArray(head)) return flatten(tail, flat.concat(head));
  else return flatten(tail, flat.concat(flatten(head)));
};

const ex = [1, 2, [3, [true, false], 4], 5];

flatten(ex);