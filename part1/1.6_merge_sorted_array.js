/*
 Question: How would you merge two sorted array?
 */
//array concat and sort
function mergeSortedArray(a, b) {
  return a.concat(b).sort(function(a, b) {
    return a-b;
  });
}

mergeSortedArray([2,5,6,9], [1,2,3,29]);