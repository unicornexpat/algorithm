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