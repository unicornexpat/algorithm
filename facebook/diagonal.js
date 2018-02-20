/*
Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.

Example:


Input:

1 2 3
4 5 6
7 8 9

Return the following :

[
  [1],
  [2, 4],
  [3, 5, 7],
  [6, 8],
  [9]
]

 */

function diagonal(A) {
  const m = A.length;
  const n = A[0].length;

  let array = [];

  for (let i = 0; i <= m + n - 2; i++) {
    let subArray = [];
    for (let j =0; j<=i; j++) {
      if (j >= m || i-j>=n) continue;
      let k = i-j;
      subArray.push(A[j][k]);
    }
  array.push(subArray);
  }

  return array;
}

const A = [[1,2,3], [4,5,6], [7,8,9]];

console.log(diagonal(A));