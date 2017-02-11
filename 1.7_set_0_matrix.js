/*
 Write an algorithm such that if an element in an MxN matrix is 0,
 its entire row and column are set to 0.
 */


function checkAndSet(matrix) {
  let row = [];
  let column = [];

  matrix.forEach(function(array, key){
    array.forEach(function(element, subkey){
      if (element == 0){
        if (column.indexOf(subkey) === -1) column.push(subkey);
        if (row.indexOf(key) == -1) row.push(key);
      }
    })
  });

  row.map(function(r) {
    matrix[r].fill(0);
  });

  for (let i = 0; i < matrix[0].length; i++){
    column.map(function(c) {
      matrix[i][c] = 0;
    })
  }

  return matrix;
}

console.log(checkAndSet([
  ["1","2","0","4","A"],
  ["5","6","7","8","B"],
  ["9","10","11","12","C"],
  ["13","14","15","16","D"],
  ["17","18","19","0","E"],
]));