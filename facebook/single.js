//Given an array of integers, every element appears twice except for one. Find that single one.

//Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

function single(A) {
  let arr = [];
  A.forEach(item => arr[item] ? arr[item]++ : arr[item] = 1);
  console.log(arr);
  return arr.indexOf(1);
}

console.log(single([1,2,2,3,1]));

//Using XOR
function xorSingle(A) {
  let a = 0;
  A.forEach(item  => a ^= item);

  return a;
}

console.log(xorSingle([1,2,2,3,1]));

//Using math 2∗(a+b+c)−(a+a+b+b+c)=c
function mathSingle(A) {
  const set = new Set(A);

  const sum = (accumulator, item) => accumulator + item;

  return 2*[...set].reduce(sum) - A.reduce(sum);
}

console.log(mathSingle([1,2,2,3,1]));
